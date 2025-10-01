import React from "react";
import Home from "../pages/Home/Home";
import AboutPage from "../pages/About/AboutPage";
import Blog from "../pages/Blog/Blog";

export const publicRoutes = [
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
];
