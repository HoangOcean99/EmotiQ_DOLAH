import React from "react";

const ContactUs = () => {
  return (
    <div
      style={{
        width: "100%",
        margin: "0",
        minHeight: "100vh",
        marginTop: "18%",
        backgroundImage: "linear-gradient(to right, #FFF8EE, #FFF2E0)",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ margin: "0 0 0 4%", width: "90%" }}>
          <h1 style={{ color: "#543725", fontSize: "70px" }}>
            Liên hệ với chúng tôi
          </h1>
          <p style={{ color: "#543725", fontSize: "25px", marginTop: "-25px" }}>
            Chúng tôi luôn sẵn sàng lắng nghe bạn !!!
          </p>
          <div style={{ display: "flex", marginTop: "45px" }}>
            <img src="TeleLogo.png" alt="Phone" width={"6%"} />
            <p style={{ color: "#543725", marginLeft: "12px" }}>0968315859</p>
          </div>
          <div style={{ display: "flex", marginTop: "30px" }}>
            <img src="MailLogo.png" alt="Email" width={"6%"} />
            <p style={{ color: "#543725", marginLeft: "12px" }}>emotiq2209@gmail.com</p>
          </div>
          <div style={{ display: "flex", marginTop: "30px" }}>
            <img src="FacebookLogo.png" alt="Facebook" width={"6%"} />
            <p style={{ color: "#543725", marginLeft: "12px" }}>https://www.facebook.com/profile.php?id=61581122470344</p>
          </div>
        </div>
        <div style={{ margin: "0 3% 0 0" }}>
          <img src="ContactUsLogo.png" alt="Hello Bear" width={"100%"} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
