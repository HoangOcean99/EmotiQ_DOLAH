import React from 'react';
import './login.css';
import authen from '../../api/authentics.js'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const handleLoginGoogle = async () => {
    try {
      const response = await authen.loginWithGoogle();
    } catch (error) {
    } finally {
      navigate('/MainChat');
    }
  }
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-left">
          <h2>Hello, Welcome!</h2>
          <p>Don't have an account?</p>
          <p>Use Google or FaceBook account to Login</p>
        </div>
        <div className="login-right">

          <h2>Login</h2>
          <p className="or"> login with social platforms</p>
          <div className="social-icons">
            <button className="social-btn" onClick={() => handleLoginGoogle()}><img src="src/assets/ggicon-Photoroom.png" alt="" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
