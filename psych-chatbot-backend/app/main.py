from fastapi import FastAPI
from pydantic import BaseModel
from .rag import query_rag

app = FastAPI()

class Query(BaseModel):
    text: str

@app.get("/")
def read_root():
    return {"message": "hello world"}

@app.post("/chat")
async def chat(query: Query):
    results = query_rag(query.text)
    # Trả về top 3 đoạn liên quan
    return {"results": results}
