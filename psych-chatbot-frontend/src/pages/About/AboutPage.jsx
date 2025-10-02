import React from "react";
import NavBar from "../../components/layout/NavBar";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = new useNavigate();
  return (
    <div>
      <NavBar />
      <div
        style={{
          minHeight: "100vh",
          width: "100vw",
          margin: "0px",
          padding: "200px 5% 60px",
          backgroundImage: "linear-gradient(to right, #FFF8EE, #FFF2E0)",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "55%", paddingRight: "5%" }}>
            <h1
              style={{
                color: "#543725",
                fontSize: "48px",
                fontWeight: "bold",
                marginBottom: "20px",
                marginTop: "-10px",
              }}
            >
              Về EmotiQ
            </h1>
            <p
              style={{
                color: "#543725",
                fontSize: "22px",
                lineHeight: 1.6,
                maxWidth: "100%",
              }}
            >
              Tại EmotiQ, chúng tôi tin rằng sức khỏe tinh thần là một hành
              trình quan trọng mà ai cũng xứng đáng được trải qua với sự thấu
              cảm và tự tin. Chúng tôi luôn đồng hành cùng bạn trên từng bước
              đi, giúp bạn khám phá cảm xúc và nuôi dưỡng một tâm trí cân bằng.
            </p>
          </div>

          <div style={{ width: "40%", textAlign: "center" }}>
            <img
              src="/LovelyBear.png"
              alt="Lovely Bear"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>

        <div
          style={{
            marginTop: "60px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
          }}
        >
          {/* Card 1 */}
          <div>
            <div style={{ display: "flex" }}>
              <img src="/Compassion.png" width={"50px"} />
              <h3
                style={{
                  margin: "10px 0",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "black",
                }}
              >
                Compassion
              </h3>
            </div>
            <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
              We create safe & welcoming spaces for reflection and growth.
            </p>
          </div>

          {/* Card 2 */}
          <div>
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
                Balance
              </h3>
            </div>
            <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
              We encourage harmony between mental, emotional, and physical
              states.
            </p>
          </div>

          {/* Card 3 */}
          <div>
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
          <div>
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

          {/* Card 5 */}
          <div>
            <div style={{ display: "flex" }}>
              <img src="/Empras.png" width={"50px"} />
              <h3
                style={{
                  margin: "10px 0",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "black",
                }}
              >
                Empras
              </h3>
            </div>
            <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
              We empower your experiences with encouragement and positivity.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "60px", textAlign: "center" }}>
          <button
            style={{
              backgroundColor: "#DE8A4D",
              border: "none",
              borderRadius: "30px",
              padding: "15px 40px",
              fontSize: "18px",
              fontWeight: "600",
              color: "white",
              cursor: "pointer",
              boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
            }}
            onClick={() => navigate('/login')}
          >
            Explore EmotiQ
          </button>
        </div>
      </div>
    </div >
  );
};

export default AboutPage;
