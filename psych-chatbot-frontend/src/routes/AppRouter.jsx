import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import PublicLayout from "../components/layout/PublicLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          {publicRoutes.map((route, index) => {
            if (route.layout === null) return null; // Skip các route không dùng layout
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
