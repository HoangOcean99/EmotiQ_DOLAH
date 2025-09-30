import React from 'react';
import './Login.css';


const Login = () => {
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
            <button className="social-btn"><img src="src/assets/ggicon-Photoroom.png" alt="" /></button>
            <button className="social-btn"><img src="src/assets/fbicon-Photoroom.png" alt="" class ="fb"/></button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
