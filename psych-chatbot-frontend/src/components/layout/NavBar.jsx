import React from "react";

const NavBar = () => {
  const buttonStyle = {
    backgroundColor: "transparent", // Nền trong suốt
    border: "none",
    fontSize: "25px",
    color: "#543725",
    fontWeight: "500",
    padding: "10px 20px",
    margin: "0px 10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: "translateY(0px)", // Vị trí gốc (theo toạ độ Y) - ko di chuyển
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    transform: "translateY(-3px)", // lên trên 3px
    textShadow: "0 4px 8px rgba(84, 55, 37, 0.3)",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    fontWeight: "600",
  };

  const buttonLogIn_1 = {
    ...buttonStyle,
    backgroundColor: "#FBC78D",
    borderRadius: "50px",
    padding: "10px 17px",
    margin: "0px 5px",
  };

  const buttonLogIn_2 = {
    ...buttonLogIn_1,
    transform: "translateY(-5px) scale(1.05)",
    boxShadow: "0 6px 12px rgba(251, 199, 141, 0.4)",
    animation: "shake 0.5s ease-in-out",
  };

  const buttonSignUp_1 = {
    ...buttonStyle,
    backgroundColor: "#DE8A4D",
    borderRadius: "50px",
    color: "white",
    padding: "10px 17px",
  };

  const buttonSignUp_2 = {
    ...buttonSignUp_1,
    transform: "translateY(-5px) scale(1.05)",
    boxShadow: "0 6px 12px rgba(251, 199, 141, 0.4)",
    animation: "shake 0.5s ease-in-out",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          // justifyContent: "space-around",
          alignItems: "center",
          height: "100px",
          margin: "1% 0px 0px 2%",
        }}
      >
        <img
          src="/Logo.png"
          alt="EmotiQ"
          width={"80px"}
          height={"80px"}
          style={{ objectFit: "contain" }} // Giữ tỉ lệ ảnh
        />
        <p style={{ fontSize: "45px", color: "#543725", fontWeight: "bold" }}>
          EmotiQ
        </p>
      </div>

      <div style={{ display: "flex", height: "80px", alignItems: "center" }}>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => {
            Object.assign(e.target.style, buttonHoverStyle); // Merge Object
          }}
          onMouseLeave={(e) => {
            Object.assign(e.target.style, buttonStyle);
          }}
        >
          About
        </button>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => {
            Object.assign(e.target.style, buttonHoverStyle);
          }}
          onMouseLeave={(e) => {
            Object.assign(e.target.style, buttonStyle);
          }}
        >
          Blog
        </button>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => {
            Object.assign(e.target.style, buttonHoverStyle);
          }}
          onMouseLeave={(e) => {
            Object.assign(e.target.style, buttonStyle);
          }}
        >
          Contact Us
        </button>
      </div>

      <div style={{ display: "flex", padding: "0px 3% 0px 0px" }}>
        <button
          style={buttonLogIn_1}
          onMouseEnter={(e) => {
            Object.assign(e.target.style, buttonLogIn_2);
          }}
          onMouseLeave={(e) => {
            Object.assign(e.target.style, buttonLogIn_1);
          }}
        >
          Log in
        </button>
        <button
          style={buttonSignUp_1}
          onMouseEnter={(e) => {
            Object.assign(e.target.style, buttonSignUp_2);
          }}
          onMouseLeave={(e) => {
            Object.assign(e.target.style, buttonSignUp_1);
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
