import React from "react";
import MainChat from "../pages/MainChat/MainChat";
import Sidebar from "../components/layout/SideBar/SideBar";
import DreamAnalysis from "../pages/DreamAnalysis/DreamAnalysis";
import EmoteTrend from "../pages/EmoteTrend/Trend";

export const privateRoutes = [
  {
    path: "/mainChat",
    element: <MainChat />,
  },
//   {
//     path: "/sidebar",
//     element: <Sidebar />,
//   },
  {
    path: "/trends",
    element: <EmoteTrend />,
  },
  {
    path: "/dreamAnalysis",
    element: <DreamAnalysis />,
  },
];

export default privateRoutes;
