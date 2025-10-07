import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ currentPage = "Chat cùng Emo" }) => {
  const navigationItems = [
    {
      id: "chat",
      name: "Chat cùng Emo",
      icon: "ChatWithEmo.png",
      path: "/mainChat",
    },
    {
      id: "trends",
      name: "Xu hướng cảm xúc",
      icon: "XuHuongCamxuc.png",
      path: "/trends",
    },
    {
      id: "dreams",
      name: "Phân tích giấc mơ",
      icon: "DreamAnalysis.png",
      path: "/dreamAnalysis",
    },
  ]

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo">
              <img src="Logo.png" alt="Logo" width="40" height="40"/>
          </div>
          <span className="logo-text">EmotiQ</span>
        </div>
        <div className="current-page">{currentPage}</div>
      </div>

      <nav className="sidebar-nav">
        {navigationItems.map((item) => (
          <a key={item.id} href={item.path} className={`nav-item ${currentPage === item.name ? "active" : ""}`}>
            <span className="nav-icon"><img style={{width: "35px", height: "35px"}} src={item.icon}/></span>
            <span className="nav-text">{item.name}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
