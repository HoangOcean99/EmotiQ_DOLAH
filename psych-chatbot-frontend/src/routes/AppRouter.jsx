import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";
import PublicLayout from "../components/layout/PublicLayout";
import Login from "../pages/Login/login";
import PrivateLayout from "../components/layout/PrivateLayout";
import ProtectedRoute from "./protected/protected";
import { AuthProvider } from "./protected/AuthContext";
import PublicProtectedRoute from "./protected/protectedPublicRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* ================================================================= */}

          <Route path="/login" element={<Login />} />
          <Route element={<PublicProtectedRoute><PublicLayout /></PublicProtectedRoute>}>
            {publicRoutes.map((route, index) => {
              if (route.layout === null) return null; // Skip các route không dùng layout
              return (
                <Route key={index} path={route.path} element={route.element} />
              );
            })}
          </Route>

          <Route element={<ProtectedRoute><PrivateLayout /></ProtectedRoute>}>
            {privateRoutes.map((route, index) => {
              if (route.layout === null) return null; // Skip các route không dùng layout
              return (<Route key={index} path={route.path} element={route.element} />)
            })}
          </Route>

        </Routes>
      </AuthProvider >
    </BrowserRouter >
  );
};

export default AppRouter;
