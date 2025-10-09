import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import api from "../../../api/authentics";

const Sidebar = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("Chat cùng Emo");
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
  ];

  const handleLogout = async () => {
    await api.logout();
    navigate("/home");
  };

  const onclickSide = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo">
            <img src="Logo.png" alt="Logo" width="40" height="40" />
          </div>
          <span className="logo-text">EmotiQ</span>
        </div>
        <div className="current-page">{currentPage}</div>
      </div>

      <nav className="sidebar-nav">
        {navigationItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`nav-item ${currentPage === item.name ? "active" : ""}`}
            onClick={() => onclickSide(item.name)}
          >
            <span className="nav-icon">
              <img
                style={{ width: "35px", height: "35px" }}
                src={item.icon || "/placeholder.svg"}
                alt={item.name}
              />
            </span>
            <span className="nav-text">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="logout-button" onClick={() => handleLogout()}>
          <span className="logout-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 17L21 12L16 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 12H9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="logout-text">Đăng xuất</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
