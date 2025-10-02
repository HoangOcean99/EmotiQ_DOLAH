import React from "react";
import NavBar from "../../components/layout/NavBar";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          width: "100%",
          margin: "0",
          minHeight: "100vh",
          padding: "12% 0 0 0",
          backgroundImage: "linear-gradient(to right, #FFF8EE, #FFF2E0)",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ flexGrow: 1, padding: "2% 5% 0 5%" }}>
            <h1 style={{ color: "#543725", fontSize: "70px" }}>Blog</h1>
            <p style={{ color: "#543725", fontSize: "35px" }}>
              Tìm hiểu nhiều hơn về cảm xúc và tâm lý tại đây !
            </p>
          </div>
          <div style={{ flexGrow: 1, textAlign: "center" }}>
            <img src="BlogPageLogo.png" alt="Hello Bear" width={"55%"} />
          </div>
        </div>

        <div
          style={{
            margin: "1% 0 0 5%",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          {/* Card 1 */}
          <div className="card-button">
            <div style={{ display: "flex" }}>
              <img src="/EmojiMoodTracking.png" width={"50px"} />
              <h3
                style={{
                  margin: "10px 0",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "black",
                }}
              >
                Những thói quen nhỏ giúp cải thiện tâm lý
              </h3>
            </div>
            <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
              We create safe & welcoming spaces for reflection and growth.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card-button">
            <div style={{ display: "flex" }}>
              <img src="/Balance.png" width={"50px"} />
              <h3
                style={{
                  margin: "10px 0",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "black",
                }}
              >
                5 ý tưởng cuối tuần cho tinh thần phấn chấn
              </h3>
            </div>
            <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
              We encourage harmony between mental, emotional, and physical
              states.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card-button">
            <div style={{ display: "flex" }}>
              <img src="/Understanding.png" width={"50px"} />
              <h3
                style={{
                  margin: "10px 0",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "black",
                }}
              >
                Understanding
              </h3>
            </div>
            <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
              We provide tools to help you reflect and manage your emotions.
            </p>
          </div>

          {/* Card 4 */}
          <div className="card-button">
            <div style={{ display: "flex" }}>
              <img src="/Empathy.png" width={"50px"} />
              <h3
                style={{
                  margin: "10px 0",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "black",
                }}
              >
                Empathy
              </h3>
            </div>
            <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
              We listen and respond with care, offering support for your
              journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
