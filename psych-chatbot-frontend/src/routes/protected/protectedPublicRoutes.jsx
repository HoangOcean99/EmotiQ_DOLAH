// src/routes/PublicRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function PublicProtectedRoute({ children }) {
  const { user } = useAuth();

  // Nếu đã đăng nhập -> chuyển hướng tới trang chính (ví dụ /dashboard)
  if (user) {
    return <Navigate to="/mainChat" replace />;
  }

  // Nếu chưa đăng nhập -> cho phép vào các trang public
  return children;
}
