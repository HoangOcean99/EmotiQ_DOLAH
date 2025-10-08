import React from "react";
import MainChat from "../pages/MainChat/MainChat";
import DreamAnalysis from "../pages/DreamAnalysis/DreamAnalysis";
import EmoteTrend from "../pages/EmoteTrend/Trend";

export const privateRoutes = [
  {
    path: "/mainChat",
    element: <MainChat />,
  },
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
