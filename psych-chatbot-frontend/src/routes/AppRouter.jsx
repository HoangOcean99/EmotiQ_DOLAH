import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
// import { privateRoutes } from "./privateRoutes";
import PublicLayout from "../components/layout/PublicLayout";
import Login from "../pages/Login/Login";
import Sidebar from "../components/layout/SideBar/SideBar";
import Trend from "../pages/EmoteTrend/Trend";
import DreamAnalysis from "../pages/DreamAnalysis/DreamAnalysis";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Test SideBar */}
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/trends" element={<Trend />} />
        <Route path="/dreamAnalysis" element={<DreamAnalysis />} />

        {/* ================================================================= */}

        <Route path="/login" element={<Login />} />
        <Route element={<PublicLayout />}>
          {publicRoutes.map((route, index) => {
            if (route.layout === null) return null; // Skip các route không dùng layout
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Route>

        {/* <Route element={<ProtectedRoute />}>
          <Route element={<PrivateLayout />}>
            {privateRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Route> */}
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
