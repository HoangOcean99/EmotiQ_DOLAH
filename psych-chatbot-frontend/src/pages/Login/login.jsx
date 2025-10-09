import React from "react";
import "./login.css";
import authen from "../../api/authentics.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginGoogle = async () => {
    try {
      const response = await authen.loginWithGoogle();
    } catch (error) {
    } finally {
      navigate("/MainChat");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <div className="logo-container">
            <img src="Logo.png" alt="Logo" width={50} height={50}/>
            <h1 className="logo-text">EmotiQ</h1>
          </div>
        </div>

        <div className="login-content">
          <h2 className="welcome-title">Chào mừng bạn đến với EmotiQ!</h2>
          <p className="welcome-subtitle">
            Người bạn tâm lý 24/7 luôn sẵn sàng đồng hành cùng bạn
          </p>

          <div className="bear-mascot">
            <div className="bear-emoji"><img src="Understanding.png" width={60} height={60}/></div>
          </div>

          <button
            className="google-login-btn"
            onClick={() => handleLoginGoogle()}
          >
            <img
              src="/ggicon-Photoroom.png"
              alt="Google"
              className="google-icon"
            />
            <span>Đăng nhập bằng Google</span>
          </button>

          <p className="login-note">
            Bắt đầu hành trình chăm sóc sức khỏe tinh thần của bạn ngay hôm nay!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
