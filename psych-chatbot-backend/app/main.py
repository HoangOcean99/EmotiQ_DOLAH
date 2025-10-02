# thêm import ở đầu file nếu chưa có
import numpy as np
from bs4 import BeautifulSoup  # optional, để fetch full article text (pip install beautifulsoup4)

# -------- helper --------
def cosine_sim(a, b):
    a = np.array(a, dtype=float)
    b = np.array(b, dtype=float)
    if np.linalg.norm(a) == 0 or np.linalg.norm(b) == 0:
        return 0.0
    return float(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)))

def fetch_page_text(url, max_chars=2000):
    """
    (optional) cố gắng fetch nội dung trang để có text đầy đủ hơn.
    Nếu site block hoặc lỗi thì fallback về None.
    """
    try:
        res = requests.get(url, timeout=5, headers={"User-Agent":"Mozilla/5.0"})
        if res.status_code != 200:
            return None
        soup = BeautifulSoup(res.text, "html.parser")
        # ghép các đoạn p lại
        paragraphs = soup.find_all("p")
        text = " ".join(p.get_text(separator=" ", strip=True) for p in paragraphs)
        if not text:
            # nếu không có p, lấy meta description
            meta = soup.find("meta", {"name":"description"}) or soup.find("meta", {"property":"og:description"})
            if meta and meta.get("content"):
                text = meta.get("content")
        if not text:
            return None
        return text[:max_chars]
    except Exception:
        return None

# -------- improved google_search --------
def google_search(query: str, num: int = 10):
    url = "https://www.googleapis.com/customsearch/v1"
    params = {
        "key": GOOGLE_API_KEY,
        "cx": GOOGLE_CX,
        "q": query,
        "num": num
    }
    resp = requests.get(url, params=params, timeout=8)
    data = resp.json()

    # debug: in ra toàn bộ data nếu cần
    # print("CSE raw response:", data)

    items = data.get("items", [])
    results = []
    for item in items:
        title = item.get("title", "") or ""
        snippet = item.get("snippet", "") or ""
        link = item.get("link", "") or ""

        # text chính để embed: ưu tiên fetch full page nếu khả dụng
        page_text = fetch_page_text(link, max_chars=1500)
        if page_text:
            text_for_embedding = f"{title}. {page_text}"
        else:
            # fallback: title + snippet
            text_for_embedding = f"{title}. {snippet}"

        results.append({
            "title": title,
            "snippet": snippet,
            "url": link,
            "text": text_for_embedding
        })

    return results

# -------- updated /search endpoint --------
@app.post("/search")
def search_text(item: QueryInput):
    if not qdrant:
        return {"status": "error", "message": "Qdrant chưa kết nối"}

    try:
        query_vector = model.encode(item.query).tolist()

        # 1) Tìm trong Qdrant trước
        results = qdrant.search(collection_name="chat", query_vector=query_vector, limit=max(10, item.top_k))
        # Lọc theo score từ qdrant (user.threshold làm ngưỡng)
        hits = []
        for r in results:
            # Nếu client trả score theo similarity, higher = better
            if getattr(r, "score", None) is not None and r.score >= item.threshold:
                hits.append({"text": r.payload.get("text", ""), "score": r.score, "url": r.payload.get("url")})

        if hits:
            return {"status": "from_db", "query": item.query, "results": hits}

        # 2) Nếu DB không đủ -> fallback Google + lọc bằng embedding similarity
        web_results = google_search(item.query, num=10)

        kept = []
        web_threshold = 0.55  # ngưỡng filter cho web results (tune được)
        for wr in web_results:
            text = wr.get("text", "")
            if not text:
                continue
            vec = model.encode(text).tolist()
            sim = cosine_sim(query_vector, vec)
            # lưu lại những result có similarity tốt
            if sim >= web_threshold:
                kept.append({"text": wr.get("text"), "url": wr.get("url"), "score": sim})

        # nếu vẫn không có kết quả đủ tốt -> mở rộng tìm kiếm (giảm ngưỡng hoặc trả top web)
        if not kept:
            # Option: trả top web kết quả nhưng gắn low_confidence flag
            fallback = [{"text": wr["text"], "url": wr["url"]} for wr in web_results[:item.top_k]]
            return {"status": "from_web_low_confidence", "query": item.query, "results": fallback, "message": "Không tìm thấy kết quả đủ tương đồng, trả top web (low confidence)."}

        # nếu có kết quả tốt -> upsert vào Qdrant để lần sau nhanh hơn
        for k in kept:
            try:
                qdrant.upsert(
                    collection_name="chat",
                    points=[
                        PointStruct(
                            id=str(uuid.uuid4()),
                            vector=model.encode(k["text"]).tolist(),
                            payload={"text": k["text"], "url": k.get("url")}
                        )
                    ]
                )
            except Exception as e:
                # không block flow nếu upsert lỗi
                print("Upsert web result error:", e)

        return {"status": "from_web", "query": item.query, "results": kept}

    except Exception as e:
        return {"status": "error", "message": str(e)}
