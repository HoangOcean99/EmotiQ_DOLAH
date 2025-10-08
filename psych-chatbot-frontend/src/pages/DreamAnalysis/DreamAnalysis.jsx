import React from "react";
import { useState } from "react";
import "./DreamAnalysis.css";

export default function DreamAnalysis() {
  const [dreamText, setDreamText] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [dreamHistory, setDreamHistory] = useState([
    {
      id: 1,
      date: "15/01/2025",
      summary: "Gặp người yêu cũ",
      emotion: "Cháy",
    },
    {
      id: 2,
      date: "12/01/2025",
      summary: "Cưới vợ giàu",
      emotion: "Oách xà lách",
    },
  ]);

  const handleAnalyze = () => {
    if (dreamText.trim() === "") return;

    setIsAnalyzing(true);

    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis({
        summary:
          "Giấc mơ của bạn phản ánh mong muốn được tự do và khám phá những điều mới mẻ.",
        symbols: [
          { symbol: "Bay", meaning: "Khát vọng tự do, vượt qua giới hạn" },
          {
            symbol: "Bầu trời",
            meaning: "Không gian vô hạn, tiềm năng phát triển",
          },
        ],
        emotion: "Tích cực, lạc quan",
        advice:
          "Hãy tìm kiếm những cơ hội mới để phát triển bản thân. Đừng ngại thử những điều chưa từng làm.",
      });
      setIsAnalyzing(false);

      // Add to history
      const newDream = {
        id: dreamHistory.length + 1,
        date: new Date().toLocaleDateString("vi-VN"),
        summary: dreamText.substring(0, 30) + "...",
        emotion: "Tích cực",
      };
      setDreamHistory([newDream, ...dreamHistory]);
    }, 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAnalyze();
    }
  };

  return (
    <div className="dream-analysis-wrapper">
      <div className="dream-analysis-header">
        <h1>Phân tích giấc mơ 🌙</h1>
      </div>

      <div className="dream-analysis-container">
        <div className="dream-main-content">
          <div className="dream-input-section">
            <h2>Kể cho Emo nghe về giấc mơ của bạn</h2>
            <p className="dream-subtitle">
              Mô tả chi tiết giấc mơ của bạn, Emo sẽ giúp bạn phân tích ý nghĩa
              và cảm xúc ẩn chứa bên trong.
            </p>

            <textarea
              className="dream-textarea"
              placeholder="Tối qua mình mơ thấy..."
              value={dreamText}
              onChange={(e) => setDreamText(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={6}
            />

            <button
              className="dream-analyze-btn"
              onClick={handleAnalyze}
              disabled={isAnalyzing || dreamText.trim() === ""}
            >
              {isAnalyzing ? "Đang phân tích..." : "Phân tích giấc mơ ✨"}
            </button>
          </div>

          {analysis && (
            <div className="dream-analysis-result">
              <h3>Kết quả phân tích</h3>

              <div className="analysis-card">
                <div className="analysis-section">
                  <h4>📝 Tóm tắt</h4>
                  <p>{analysis.summary}</p>
                </div>

                <div className="analysis-section">
                  <h4>🔮 Biểu tượng trong giấc mơ</h4>
                  <div className="symbols-grid">
                    {analysis.symbols.map((item, index) => (
                      <div key={index} className="symbol-card">
                        <strong>{item.symbol}</strong>
                        <p>{item.meaning}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="analysis-section">
                  <h4>💭 Cảm xúc</h4>
                  <p>{analysis.emotion}</p>
                </div>

                <div className="analysis-section">
                  <h4>💡 Lời khuyên</h4>
                  <p>{analysis.advice}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="dream-sidebar">
          <div className="dream-history-card">
            <h3>Lịch sử giấc mơ</h3>
            <div className="dream-history-list">
              {dreamHistory.map((dream) => (
                <div key={dream.id} className="dream-history-item">
                  <div className="dream-date">{dream.date}</div>
                  <div className="dream-summary">{dream.summary}</div>
                  <div className="dream-emotion">{dream.emotion}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="dream-tips-card">
            <h3>💡 Mẹo ghi nhớ giấc mơ</h3>
            <ul className="dream-tips-list">
              <li>Ghi lại ngay khi thức dậy</li>
              <li>Chú ý đến cảm xúc trong mơ</li>
              <li>Ghi nhớ chi tiết màu sắc, âm thanh</li>
              <li>Không phán xét, chỉ ghi chép</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
