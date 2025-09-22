# EmotiQ\_DOLAH

Website trò chuyện AI hỗ trợ tâm lý.

## Frontend

1. Chuyển đến thư mục frontend:

   ```bash
   cd psych-chatbot-frontend
   ```
2. Cài đặt các gói cần thiết:

   ```bash
   npm install
   ```
3. Chạy frontend:

   ```bash
   npm run dev
   ```

## Backend

> Lưu ý: Đảm bảo đang ở đúng thư mục backend (không phải frontend)

1. Chuyển đến thư mục backend:

   ```bash
   cd psych-chatbot-backend
   ```
2. Cài đặt các thư viện cần thiết từ `requirements.txt`:

   ```bash
   pip install -r requirements.txt
   ```
3. Chạy backend với Uvicorn:

   ```bash
   uvicorn app.main:app --reload
   ```

## Yêu cầu

* Node.js
* Python 3.9+
* Các gói Python được liệt kê trong `requirements.txt`
