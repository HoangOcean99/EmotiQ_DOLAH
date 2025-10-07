import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundImage: "linear-gradient(to right, #FFF8EE, #FEDDAE)",
        width: "100%",
        borderTop: "3px solid #FEEFD6",
      }}
    >
        <div style={{display: "flex", alignItems: "center"}}>
            <img style={{marginLeft: "3%"}} src="FooterBear.png" alt="FooterBear" width={"4%"}/>
            <div>
                <h5 style={{color: "#543725", fontSize: "16px", margin: "2px 0 0 0"}}>EmotiQ</h5>
                <h6 style={{color: "#543725", fontSize: "14px", margin: "-2px 0 0 0"}}>Made by DOLAH's 💓 and ☕</h6> 
            </div>
            <div>
                <p style={{color: "#543725", margin: "5px 0 0 450px", fontSize: "14px"}}> © 2025 EmotiQ. All rights reserved.</p>
            </div>
        </div>
    </div>
  );
};

export default Footer;
