from pathlib import Path
from pydantic_settings import BaseSettings

BASE_DIR = Path(__file__).resolve().parent.parent  # thư mục ngoài app

class Settings(BaseSettings):
    # ========== Firebase Config ==========
    FIREBASE_API_KEY: str
    FIREBASE_AUTH_DOMAIN: str
    FIREBASE_PROJECT_ID: str
    FIREBASE_STORAGE_BUCKET: str
    FIREBASE_MESSAGING_SENDER_ID: str
    FIREBASE_APP_ID: str
    FIREBASE_MEASUREMENT_ID: str

    # Service account
    FIREBASE_CREDENTIALS: str

    # ========== Backend Config ==========
    PROJECT_NAME: str = "Emotiq API"
    API_V1_STR: str = "/api/v1"
    SECRET_KEY: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    class Config:
        env_file = ".env"  # 🔥 ép về string

settings = Settings()

print(">>> DEBUG ENV LOADED <<<")
print("FIREBASE_API_KEY:", settings.FIREBASE_API_KEY[:10], "...")  # in thử 10 ký tự đầu
print("PROJECT_NAME:", settings.PROJECT_NAME)
print("BASE_DIR =", BASE_DIR)
print("ENV PATH =", str(BASE_DIR / ".env"))

