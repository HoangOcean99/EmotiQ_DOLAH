from fastapi import FastAPI
from pydantic import BaseModel
from app.api.v1 import login  # <-- thêm dòng này
from app.core.config import settings
from app.api.rag import query_rag
from dotenv import load_dotenv
import os

app = FastAPI(title=settings.PROJECT_NAME)
load_dotenv()

print(">>> DEBUG: FIREBASE_API_KEY =", os.getenv("FIREBASE_API_KEY"))

# include router
app.include_router(login.router, prefix=settings.API_V1_STR, tags=["auth"])

@app.get("/")
def read_root():
    return {"message": "hello world"}

class Query(BaseModel):
    text: str

@app.post("/chat")
async def chat(query: Query):
    results = query_rag(query.text)
    return {"results": results}
