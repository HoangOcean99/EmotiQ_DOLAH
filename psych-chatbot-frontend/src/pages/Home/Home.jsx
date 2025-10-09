import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          marginTop: "22%",
          paddingBottom: "5%",
          backgroundImage: "linear-gradient(to right, #FFF8EE, #FFF2E0)",
        }}
      >
        <div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "55%", margin: "0px 0px 0px 3%" }}>
              <h1 style={{ color: "#543725", fontSize: "65px" }}>
                Người bạn tâm lý 24/7 !
              </h1>
              <p style={{ color: "#543725", fontSize: "25px" }}>
                EmotiQ là nền tảng AI hỗ trợ sức khoẻ tinh thần, luôn sẵn sàng
                đồng hành cùng bạn bất cứ lúc nào !!!
              </p>
              <button className="start-button"
              onClick={() => navigate('/login')}>
                Bắt đầu hành trình của bạn 💓
              </button>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "stretch",
                  padding: "40px 1%",
                  gap: "30px",
                }}
              >
                <div
                  className="feature-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 48px rgba(84, 55, 37, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(84, 55, 37, 0.1)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <div className="icon-circle">
                      <img src="/EmojiAIChatbot.png" width={"70px"} />
                    </div>
                    <div>
                      <h3
                        style={{
                          color: "#543725",
                          fontSize: "24px",
                          fontWeight: "700",
                          margin: "0",
                        }}
                      >
                        Trợ lý trò chuyện AI
                      </h3>
                    </div>
                  </div>
                  <p
                    style={{
                      color: "#543725",
                      fontSize: "16px",
                      lineHeight: "1.6",
                      opacity: "0.8",
                      margin: "0",
                    }}
                  >
                    Được huấn luyện để phân tích và hỗ trợ nhu cầu tâm lý của
                    bạn thông qua những cuộc trò chuyện và hướng dẫn cá nhân
                    hóa.
                  </p>
                </div>

                <div
                  className="feature-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 48px rgba(84, 55, 37, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(84, 55, 37, 0.1)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <div className="icon-circle">
                      <img src="/EmojiMoodTracking.png" width={"80px"} />
                    </div>
                    <div>
                      <h3
                        style={{
                          color: "#543725",
                          fontSize: "24px",
                          fontWeight: "700",
                          margin: "0",
                        }}
                      >
                        Bảng điều khiển theo dõi cảm xúc
                      </h3>
                    </div>
                  </div>
                  <p
                    style={{
                      color: "#543725",
                      fontSize: "16px",
                      lineHeight: "1.6",
                      opacity: "0.8",
                      margin: "0",
                    }}
                  >
                    Theo dõi và phân tích sự thay đổi trong trạng thái cảm xúc
                    của bạn với những thông tin chi tiết và báo cáo tiến trình.
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "42%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="chat-box">
                <div className="chat-row">
                  <img
                    src="/EmojiAIChatbot.png"
                    alt="AI"
                    className="chat-avatar"
                  />
                  <div className="chat-bubble">
                    Xin chào! Hôm nay bạn thấy thế nào?
                  </div>
                </div>

                <img
                  src="/HelloBear.png"
                  alt="Hello Bear"
                  className="chat-bear"
                />

                <div className="chat-options">
                  <button className="chat-btn">Mình ổn, cảm ơn bạn!</button>
                  <button className="chat-btn">Không được tốt lắm...</button>
                  <button className="chat-btn">
                    Hôm nay mình rất tuyệt vời!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
