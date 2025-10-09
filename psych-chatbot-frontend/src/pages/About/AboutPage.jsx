import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const AboutPage = () => {
  const navigate = new useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        marginTop: "30%",
        padding: "0 5% 5% 5%",
        backgroundImage: "linear-gradient(to right, #FFF8EE, #FFF2E0)",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "55%", paddingRight: "5%" }}>
          <h1
            style={{
              color: "#543725",
              fontSize: "55px",
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
            Tại EmotiQ, chúng tôi tin rằng sức khỏe tinh thần là một hành trình
            quan trọng mà ai cũng xứng đáng được trải qua với sự thấu cảm và tự
            tin. Chúng tôi luôn đồng hành cùng bạn trên từng bước đi, giúp bạn
            khám phá cảm xúc và nuôi dưỡng một tâm trí cân bằng.
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
              Thấu hiểu cảm xúc
            </h3>
          </div>
          <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
            EmotiQ giúp bạn gọi tên từng cung bậc cảm xúc, lắng nghe chính mình
            - bước đầu tiên trên hành trình chữa lành và phát triển nội tâm.
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
              Cân bằng thân thể - tâm trí
            </h3>
          </div>
          <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
            Tại EmotiQ, bạn có thể theo dõi trạng thái cảm xúc và tinh thần mỗi
            ngày, từ đó tìm lại nhịp cân bằng công việc, học tập và cuộc sống.
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
              Năng lượng tích cực
            </h3>
          </div>
          <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
            EmotiQ tiếp thêm động lực để bạn buông bỏ mệt mỏi, tái tạo năng lượng và đón ngày mới với tâm thế an yên, tự tin.
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
              Không gian chữa lành
            </h3>
          </div>
          <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
          EmotiQ mang đến cảm giác ấm áp, riêng tư và đồng hành như một góc nhỏ an toàn để bạn được là chính mình.
          </p>
        </div>

        {/* Card 5 */}
        <div>
          <div style={{ display: "flex" }}>
            <img src="/SelfAwareness.png" width={"55px"} />
            <h3
              style={{
                margin: "10px 0",
                fontSize: "20px",
                fontWeight: "700",
                color: "black",
              }}
            >
              Đồng hành cùng phát triển
            </h3>
          </div>
          <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
          Không chỉ là ứng dụng, EmotiQ là người bạn tinh thần, luôn lắng nghe, thấu hiểu và khích lệ bạn mỗi ngày.
          </p>
        </div>

        {/* Card 6 */}
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
              Biến mỗi ngày thành bước tiến nhỏ
            </h3>
          </div>
          <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.6 }}>
          Theo dõi hành trình cảm xúc qua bảng hành vi, nhìn thấy sự thay đổi tích cực của chính bạn: từng ngày, từng bước.
          </p>
        </div>
      </div>

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <button className="start-button" onClick={() => navigate("/login")}>
          Khám Phá EmotiQ
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
