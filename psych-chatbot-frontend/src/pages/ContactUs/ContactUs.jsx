import React from "react";
import NavBar from "../../components/layout/NavBar";

const ContactUs = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          width: "100%",
          margin: "0",
          minHeight: "100vh",
          padding: "13% 0 0 0",
          backgroundImage: "linear-gradient(to right, #FFF8EE, #FFF2E0)",
          backgroundSize: "cover",
        }}
      >
        <div style={{ display: "flex"}}>
          <div style={{ width: "40%", padding: "4% 5% 0 5%" }}>
            <h1 style={{ color: "#543725", fontSize: "50px" }}>Liên hệ với chúng tôi</h1>
            <p style={{ color: "#543725", fontSize: "30px" }}>
              Chúng tôi luôn sẵn sàng lắng nghe bạn !
            </p>
          </div>
          <div style={{ width: "60%", textAlign: "center" }}>
            <img src="ContactUsLogo.png" alt="Hello Bear" width={"70%"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
