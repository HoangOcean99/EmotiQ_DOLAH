import React from "react";
import Home from "../pages/Home/Home";
import AboutPage from "../pages/About/AboutPage";
import Blog from "../pages/Blog/Blog";
import ContactUs from "../pages/ContactUs/ContactUs";

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
  {
    path: "/contactus",
    element: <ContactUs />,
  },
];
