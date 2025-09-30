from fastapi import APIRouter, HTTPException
from firebase_admin import auth
import app.core.firebase  # ensure init
from app.schemas.auth import LoginRequest  # import schema

router = APIRouter()

@router.post("/login")
def login(data: LoginRequest):
    try:
        decoded_token = auth.verify_id_token(data.id_token)
        uid = decoded_token["uid"]
        email = decoded_token.get("email")
        name = decoded_token.get("name")

        return {
            "message": "Login thành công",
            "uid": uid,
            "email": email,
            "name": name,
        }
    except Exception as e:
        raise HTTPException(status_code=401, detail=f"Token không hợp lệ: {str(e)}")
