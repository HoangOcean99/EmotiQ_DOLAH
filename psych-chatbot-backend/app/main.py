from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
from qdrant_client import QdrantClient
from qdrant_client.models import PointStruct, Distance, VectorParams
from fastapi.middleware.cors import CORSMiddleware
import uuid
import requests
import numpy as np

app = FastAPI()

# ----- CORS -----
origins = ["http://localhost:5173", "http://127.0.0.1:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----- Model lazy load -----
model = None
def get_model():
    global model
    if model is None:
        # Model chính xác hơn nhưng vẫn vừa phải (~120MB)
        model = SentenceTransformer("all-MiniLM-L6-v2", device="cpu")
    return model

# ----- Vector normalization -----
def normalize(vec):
    vec = np.array(vec)
    norm = np.linalg.norm(vec)
    if norm == 0:
        return vec.tolist()
    return (vec / norm).tolist()

# ----- Qdrant setup -----
qdrant = None
try:
    qdrant = QdrantClient(
        url="https://d7290930-dcf4-4366-8306-053306375c21.europe-west3-0.gcp.cloud.qdrant.io",
        api_key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJtIn0.8bhRFPtvi4GXj2UV3P_sy-uK-K6pqz1uJjDYvyymd28",
        timeout=10
    )
    collections = [c.name for c in qdrant.get_collections().collections]
    if "chat" not in collections:
        qdrant.create_collection(
            collection_name="chat",
            vectors_config=VectorParams(size=384, distance=Distance.COSINE)
        )
except Exception as e:
    print("❌ Lỗi Qdrant:", e)

# ----- Pydantic models -----
class TextInput(BaseModel):
    text: str

class QueryInput(BaseModel):
    query: str
    top_k: int = 1
    min_score: float = 0.3  # lọc score thấp

# ----- Add text endpoint -----
@app.post("/add_text")
def add_text(item: TextInput):
    if not qdrant:
        return {"status": "error", "message": "Qdrant chưa kết nối"}

    try:
        vector = normalize(get_model().encode(item.text))
        point_id = str(uuid.uuid4())
        qdrant.upsert(
            collection_name="chat",
            points=[PointStruct(id=point_id, vector=vector, payload={"text": item.text})]
        )
        return {"status": "success", "id": point_id, "text": item.text}
    except Exception as e:
        return {"status": "error", "message": str(e)}

# ----- Google search fallback -----
GOOGLE_API_KEY = "AIzaSyB5vFZTdPG2daYieWZVT18dZ8rSdfxsTJE"
GOOGLE_CX = "b1674b0b3f51c4adb"

def google_search(query: str, num: int = 3):
    try:
        url = "https://www.googleapis.com/customsearch/v1"
        params = {"key": GOOGLE_API_KEY, "cx": GOOGLE_CX, "q": query, "num": num}
        response = requests.get(url, params=params)
        data = response.json()
        results = [{"text": i.get("snippet", ""), "url": i.get("link", "")} for i in data.get("items", [])]
        return results
    except:
        return []

# ----- Search endpoint -----
@app.post("/search")
def search_text(item: QueryInput):
    if not qdrant:
        return {"status": "error", "message": "Qdrant chưa kết nối"}

    try:
        query_vector = normalize(get_model().encode(item.query))
        results = qdrant.search(collection_name="chat", query_vector=query_vector, limit=item.top_k * 5)

        # lọc score thấp
        hits = [{"text": r.payload.get("text", ""), "score": r.score} 
                for r in results 
                if r.payload and r.score >= item.min_score]

        # fallback Google nếu DB trống
        if not hits:
            web_results = google_search(item.query, item.top_k)
            for wr in web_results:
                vector = normalize(get_model().encode(wr["text"]))
                qdrant.upsert(
                    collection_name="chat",
                    points=[PointStruct(id=str(uuid.uuid4()), vector=vector, payload=wr)]
                )
            return {"status": "from_web", "query": item.query, "results": web_results}

        # chỉ lấy top_k sau khi lọc
        hits = sorted(hits, key=lambda x: x["score"], reverse=True)[:item.top_k]

        return {"status": "from_db", "query": item.query, "results": hits}

    except Exception as e:
        return {"status": "error", "message": str(e)}
