import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../configs/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div>Đang kiểm tra đăng nhập...</div>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
