from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
from qdrant_client import QdrantClient
from qdrant_client.models import PointStruct, Distance, VectorParams
from qdrant_client.http.exceptions import UnexpectedResponse


import uuid
import requests

app = FastAPI()

model = SentenceTransformer("all-MiniLM-L6-v2")

qdrant = None
try:
    qdrant = QdrantClient(
        url="https://d7290930-dcf4-4366-8306-053306375c21.europe-west3-0.gcp.cloud.qdrant.io",
        api_key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJtIn0.8bhRFPtvi4GXj2UV3P_sy-uK-K6pqz1uJjDYvyymd28",
        timeout=10
    )

    # Thử gọi info để check kết nối
    info = qdrant.get_collections()
    print("✅ Kết nối thành công Qdrant:", info)

except UnexpectedResponse as e:
    print("❌ Lỗi từ Qdrant API:", e)
except Exception as e:
    print("❌ Không kết nối được Qdrant:", e)



if qdrant:
    try:
        collections = qdrant.get_collections().collections
        collection_names = [c.name for c in collections]

        if "chat" in collection_names:
            print("⚠️ Collection 'chat' đã có")
        else:
            qdrant.create_collection(
                collection_name="chat",
                vectors_config=VectorParams(
                    size=384,
                    distance=Distance.COSINE
                )
            )
            print("✅ Collection 'chat' đã tạo mới")
    except Exception as e:
        print("❌ Lỗi khi kiểm tra/tạo collection:", e)


class TextInput(BaseModel):
    text: str


# them du lieu
@app.post("/add_text")
def add_text(item: TextInput):
    if not qdrant:
        return {"status": "error", "message": "Qdrant chưa kết nối"}

    try:
        # Encode văn bản thành vector
        vector = model.encode(item.text).tolist()
        point_id = str(uuid.uuid4())

        # Thêm point vào Qdrant
        qdrant.upsert(
            collection_name="chat",
            points=[
                PointStruct(
                    id=point_id,
                    vector=vector,
                    payload={"text": item.text}
                )
            ]
        )

        return {"status": "success", "id": point_id, "text": item.text}
    except Exception as e:
        return {"status": "error", "message": str(e)}


class QueryInput(BaseModel):
    query: str
    top_k: int = 3  # mặc định lấy 3 kết quả gần nhất


GOOGLE_API_KEY = "AIzaSyB5vFZTdPG2daYieWZVT18dZ8rSdfxsTJE"
GOOGLE_CX = "b1674b0b3f51c4adb"

def google_search(query: str, num: int = 3):
    url = "https://www.googleapis.com/customsearch/v1"
    params = {
        "key": GOOGLE_API_KEY,
        "cx": GOOGLE_CX,
        "q": query,
        "num": num
    }
    response = requests.get(url, params=params)
    data = response.json()

    results = []
    for item in data.get("items", []):
        snippet = item.get("snippet", "")
        link = item.get("link", "")
        results.append({"text": snippet, "url": link})

    return results


@app.post("/search")
def search_text(item: QueryInput):
    if not qdrant:
        return {"status": "error", "message": "Qdrant chưa kết nối"}

    try:
        # Encode câu hỏi thành vector
        query_vector = model.encode(item.query).tolist()

        # Tìm trong Qdrant
        results = qdrant.search(
            collection_name="chat",
            query_vector=query_vector,
            limit=item.top_k
        )

        hits = []
        for r in results:
            payload = r.payload or {}
            hits.append({
                "text": payload.get("text", ""),
                "score": r.score
            })

        # Nếu không có kết quả trong DB → tìm Google
        if not hits:
            web_results = google_search(item.query, item.top_k)

            # Lưu vào Qdrant
            for wr in web_results:
                vector = model.encode(wr["text"]).tolist()
                point_id = str(uuid.uuid4())
                qdrant.upsert(
                    collection_name="chat",
                    points=[
                        PointStruct(
                            id=point_id,
                            vector=vector,
                            payload={"text": wr["text"], "url": wr["url"]}
                        )
                    ]
                )

            return {
                "status": "from_web",
                "query": item.query,
                "results": web_results
            }

        return {
            "status": "from_db",
            "query": item.query,
            "results": hits
        }

    except Exception as e:
        return {"status": "error", "message": str(e)}
