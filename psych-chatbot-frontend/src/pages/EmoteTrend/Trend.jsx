import React from "react"
import "./Trend.css"

function EmoteTrend() {
  return (
    <div className="emote-trend-wrapper">
      <header className="emote-trend-header">
        <div className="emote-trend-header-content">
          <img className="header-emoji" src="XuHuongCamxuc.png" width={40} height={40} />
          <h1>Xu hướng cảm xúc</h1>
        </div>
      </header>

      <div className="emote-trend-container">
        <div className="emote-trend-content">
          {/* Main Content */}
          <div className="main-section">
            {/* Hero Section */}
            <div className="hero-section">
              <div className="hero-text">
                <h2 className="hero-title">Explore your emotional journey</h2>
                <p className="hero-subtitle">Improve your mental well-being every day</p>
              </div>
              <div className="hero-emoji">😊</div>
            </div>

            {/* Mood Graph */}
            <div className="mood-graph-section">
              <h3 className="section-title">Your mood states this week</h3>
              <div className="mood-graph">
                <svg width="100%" height="200" viewBox="0 0 700 200">
                  <path
                    d="M 80 120 Q 150 100 220 110 T 360 80 T 500 60 T 640 50"
                    stroke="#E89B3C"
                    strokeWidth="4"
                    fill="none"
                  />
                  <g>
                    <circle cx="80" cy="120" r="25" fill="#F4D03F" />
                    <text x="80" y="128" textAnchor="middle" fontSize="20">
                      😢
                    </text>
                    <text x="80" y="170" textAnchor="middle" fontSize="14" fill="#666">
                      Thứ 2
                    </text>
                  </g>
                  <g>
                    <circle cx="220" cy="110" r="25" fill="#F4D03F" />
                    <text x="220" y="118" textAnchor="middle" fontSize="20">
                      😐
                    </text>
                    <text x="220" y="160" textAnchor="middle" fontSize="14" fill="#666">
                      Thứ 3
                    </text>
                  </g>
                  <g>
                    <circle cx="360" cy="80" r="25" fill="#F4D03F" />
                    <text x="360" y="88" textAnchor="middle" fontSize="20">
                      😊
                    </text>
                    <text x="360" y="130" textAnchor="middle" fontSize="14" fill="#666">
                      Thứ 4
                    </text>
                  </g>
                  <g>
                    <circle cx="500" cy="60" r="25" fill="#F4D03F" />
                    <text x="500" y="68" textAnchor="middle" fontSize="20">
                      😄
                    </text>
                    <text x="500" y="110" textAnchor="middle" fontSize="14" fill="#666">
                      Thứ 5
                    </text>
                  </g>
                  <g>
                    <circle cx="640" cy="50" r="25" fill="#F4D03F" />
                    <text x="640" y="58" textAnchor="middle" fontSize="20">
                      😃
                    </text>
                    <text x="640" y="100" textAnchor="middle" fontSize="14" fill="#666">
                      Thứ 6
                    </text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Bottom Charts Row */}
            <div className="charts-row">
              {/* Feelings Percentage */}
              <div className="chart-card">
                <h3 className="section-title">Feelings percentage over the week</h3>
                <div className="donut-chart-container">
                  <svg width="200" height="200" viewBox="0 0 200 200">
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#E89B3C"
                      strokeWidth="40"
                      strokeDasharray="150 350"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#F39C12"
                      strokeWidth="40"
                      strokeDasharray="100 400"
                      strokeDashoffset="-150"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#F4D03F"
                      strokeWidth="40"
                      strokeDasharray="80 420"
                      strokeDashoffset="-250"
                    />
                  </svg>
                  <div className="chart-legend">
                    <div className="legend-item">
                      <span className="legend-color" style={{ backgroundColor: "#E89B3C" }}></span> Joyful
                    </div>
                    <div className="legend-item">
                      <span className="legend-color" style={{ backgroundColor: "#F39C12" }}></span> Anxious
                    </div>
                    <div className="legend-item">
                      <span className="legend-color" style={{ backgroundColor: "#F4D03F" }}></span> Sad
                    </div>
                  </div>
                </div>
              </div>

              {/* Compare to Last Week */}
              <div className="chart-card">
                <h3 className="section-title">Compare to last week</h3>
                <div className="bar-chart">
                  <div className="week-labels">
                    <div className="week-label">Week 39</div>
                    <div className="week-label active">Week 40</div>
                  </div>
                  <div className="bars">
                    <div className="bar" style={{ height: "80px", backgroundColor: "#F39C12" }}></div>
                    <div className="bar" style={{ height: "120px", backgroundColor: "#E89B3C" }}></div>
                  </div>
                </div>
              </div>

              {/* High & Low Emotion Hours */}
              <div className="chart-card">
                <h3 className="section-title">High & low emotion hours</h3>
                <div className="heatmap">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className="heatmap-cell"
                      style={{
                        backgroundColor:
                          i < 6 ? "#F9E79F" : i < 12 ? "#F7DC6F" : i < 18 ? "#F4D03F" : i < 20 ? "#F39C12" : "#E89B3C",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="right-sidebar">
            {/* Quick Summary */}
            <div className="summary-card">
              <h3 className="sidebar-title">Quick summary</h3>
              <div className="average-mood">
                <p className="summary-label">Average mood</p>
                <div className="mood-percentage">
                  <span className="emoji">😊</span>
                  <span className="percentage">68%</span>
                </div>
              </div>
              <div className="summary-row">
                <div className="summary-item">
                  <p className="summary-label">Best day</p>
                  <p className="summary-value">Friday</p>
                </div>
                <div className="summary-item">
                  <p className="summary-label">Hardest day</p>
                  <p className="summary-value">Tuesday</p>
                </div>
              </div>
            </div>

            {/* Improvement Suggestions */}
            <div className="suggestions-card">
              <h3 className="sidebar-title">Improvement suggestions from Emo</h3>
              <div className="suggestion-content">
                <div className="bear-mascot">🐻</div>
                <p className="suggestion-text">
                  You seem to be stressed in the middle of the week. Try the 4-7-8 breathing exercise!
                </p>
                <button className="try-now-btn">
                  <span>Try now</span>
                  <span className="btn-icon">💛</span>
                </button>
              </div>
            </div>

            {/* Personal Goal */}
            <div className="goal-card">
              <h3 className="sidebar-title">Personal goal</h3>
              <p className="goal-placeholder">Set your emotional wellness goals here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmoteTrend
