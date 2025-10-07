import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import api from '../../../api/authentics'

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
  ]

  const handleLogout = async () => {
    await api.logout();
    navigate('/home')
  }
  const onclickSide = (page) => {
    setCurrentPage(page);
  }
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
          <Link key={item.id} to={item.path} className={`nav-item ${currentPage === item.name ? "active" : ""}`} onClick={() => onclickSide(item.name)}>
            <span className="nav-icon"><img style={{ width: "35p  x", height: "35px" }} src={item.icon} /></span>
            <span className="nav-text">{item.name}</span>
          </Link>
        ))}
        <button onClick={() => handleLogout()}>Đăng xuất</button>
      </nav>
    </div>
  )
}

export default Sidebar
