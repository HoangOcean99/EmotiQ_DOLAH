import React from "react";
import NavBar from "../../components/layout/NavBar";
import "./Blog.css";

const Blog = () => {
  return (
    <div
      style={{
        width: "100%",
        margin: "0",
        minHeight: "100vh",
        marginTop: "24%",
        paddingBottom: "5%",
        backgroundImage: "linear-gradient(to right, #FFF8EE, #FFF2E0)",
        backgroundSize: "cover",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: 1, padding: "0 5% 0 4%" }}>
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
          margin: "1% 0 0 2%",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          alignContent: "center",
          alignItems: "center",
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
            .....
          </p>
        </div>

        {/* Card 2 */}
        <div className="card-button">
          <div style={{ display: "flex" }}>
            <img src="/5Ideas.png" width={"50px"} />
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
            .....
          </p>
        </div>

        {/* Card 3 */}
        <div className="card-button">
          <div style={{ display: "flex" }}>
            <img src="/5Ideas_2.png" width={"50px"} />
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
            .....
          </p>
        </div>

        {/* Card 4 */}
        <div className="card-button">
          <div style={{ display: "flex" }}>
            <img src="/5Ideas_3.png" width={"50px"} />
            <h3
              style={{
                margin: "10px 0",
                fontSize: "20px",
                fontWeight: "700",
                color: "black",
              }}
            >
              .....
            </h3>
          </div>
          <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
            .....
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
