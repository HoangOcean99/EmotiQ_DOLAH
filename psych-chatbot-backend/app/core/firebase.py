import firebase_admin
from firebase_admin import credentials, auth
from app.core.config import settings

cred_path = settings.FIREBASE_CREDENTIALS

# In debug để kiểm tra path lấy từ .env
print("🔥 DEBUG FIREBASE_CREDENTIALS =", cred_path)
print(">>> ENV LOADED <<<")
print("FIREBASE_API_KEY:", settings.FIREBASE_API_KEY)
print("PROJECT_NAME:", settings.PROJECT_NAME)

if not firebase_admin._apps:  # tránh khởi tạo nhiều lần
    cred = credentials.Certificate(cred_path)
    firebase_admin.initialize_app(cred)
