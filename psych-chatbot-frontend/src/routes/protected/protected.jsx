import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoutes({ children }) {
    const { user, loading } = useAuth();

    if (loading) return (
        <div className="w-full h-full bg-white">
        </div>
    ); // hoặc spinner
    if (!user) return <Navigate to="/login" replace />;

    return children;
}
