from pathlib import Path
from dotenv import load_dotenv
import os

BASE_DIR = Path(__file__).resolve().parent
env_path = BASE_DIR / ".env"

print(">>> BASE_DIR:", BASE_DIR)
print(">>> ENV PATH:", env_path)

# Load thủ công
load_dotenv(dotenv_path=env_path)

# Test đọc biến
print("FIREBASE_API_KEY =", os.getenv("FIREBASE_API_KEY"))
print("SECRET_KEY =", os.getenv("SECRET_KEY"))
