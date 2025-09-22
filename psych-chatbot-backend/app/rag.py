from sentence_transformers import SentenceTransformer
import faiss
import numpy as np
import json

# Load embedding model
model = SentenceTransformer('all-MiniLM-L6-v2')

# Load documents
with open('app/data/docs.json', 'r', encoding='utf-8') as f:
    docs = json.load(f)

# Compute embeddings
embeddings = model.encode([d['text'] for d in docs], convert_to_numpy=True)

# Build FAISS index
dimension = embeddings.shape[1]
index = faiss.IndexFlatL2(dimension)
index.add(embeddings)

def query_rag(user_input, top_k=3):
    q_emb = model.encode([user_input], convert_to_numpy=True)
    D, I = index.search(q_emb, top_k)
    results = [docs[i] for i in I[0]]
    return results
