import React from "react";
import "./Trend.css";
import Sidebar from "../../components/layout/SideBar/SideBar";

function EmoteTrend() {
  return (
    <div>
        <Sidebar/>
      <div className="emote-trend-container">
        {/* Header */}
        <div className="emote-trend-header">
          <div className="header-left">
            <div className="logo-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 5C15 5 10 8 10 15C10 20 15 25 20 30C25 25 30 20 30 15C30 8 25 5 20 5Z"
                  fill="#E89B3C"
                  stroke="#E89B3C"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h1 className="page-title">Track Emotional Trends</h1>
          </div>
          <div className="user-profile-icon">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <circle cx="25" cy="25" r="25" fill="#F4E4B5" />
              <circle cx="25" cy="20" r="8" fill="#E89B3C" />
              <path
                d="M10 40C10 32 16 28 25 28C34 28 40 32 40 40"
                fill="#E89B3C"
              />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="emote-trend-content">
          {/* Left Main Section */}
          <div className="main-section">
            {/* Hero Section */}
            <div className="hero-section">
              <h2 className="hero-title">
                Explore your emotional journey and
                <br />
                improve your mental well-being every day
              </h2>
              <div className="hero-emoji">😊</div>
            </div>

            {/* Mood Graph */}
            <div className="mood-graph-section">
              <h3 className="section-title">Your mood states this week</h3>
              <div className="mood-graph">
                <svg width="100%" height="200" viewBox="0 0 700 200">
                  {/* Line connecting points */}
                  <path
                    d="M 80 120 Q 150 100 220 110 T 360 80 T 500 60 T 640 50"
                    stroke="#E89B3C"
                    strokeWidth="4"
                    fill="none"
                  />
                  {/* Mood points */}
                  <g>
                    <circle cx="80" cy="120" r="25" fill="#F4D03F" />
                    <text x="80" y="128" textAnchor="middle" fontSize="20">
                      😢
                    </text>
                    <text
                      x="80"
                      y="170"
                      textAnchor="middle"
                      fontSize="14"
                      fill="#666"
                    >
                      Monday
                    </text>
                  </g>
                  <g>
                    <circle cx="220" cy="110" r="25" fill="#F4D03F" />
                    <text x="220" y="118" textAnchor="middle" fontSize="20">
                      😐
                    </text>
                    <text
                      x="220"
                      y="160"
                      textAnchor="middle"
                      fontSize="14"
                      fill="#666"
                    >
                      Thu 3
                    </text>
                  </g>
                  <g>
                    <circle cx="360" cy="80" r="25" fill="#F4D03F" />
                    <text x="360" y="88" textAnchor="middle" fontSize="20">
                      😊
                    </text>
                    <text
                      x="360"
                      y="130"
                      textAnchor="middle"
                      fontSize="14"
                      fill="#666"
                    >
                      Thu 4
                    </text>
                  </g>
                  <g>
                    <circle cx="500" cy="60" r="25" fill="#F4D03F" />
                    <text x="500" y="68" textAnchor="middle" fontSize="20">
                      😄
                    </text>
                    <text
                      x="500"
                      y="110"
                      textAnchor="middle"
                      fontSize="14"
                      fill="#666"
                    >
                      Sunday
                    </text>
                  </g>
                  <g>
                    <circle cx="640" cy="50" r="25" fill="#F4D03F" />
                    <text x="640" y="58" textAnchor="middle" fontSize="20">
                      😃
                    </text>
                    <text
                      x="640"
                      y="100"
                      textAnchor="middle"
                      fontSize="14"
                      fill="#666"
                    >
                      Sunday
                    </text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Bottom Charts Row */}
            <div className="charts-row">
              {/* Feelings Percentage */}
              <div className="chart-card">
                <h3 className="section-title">
                  Feelings percentage
                  <br />
                  over the week
                </h3>
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
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#F7DC6F"
                      strokeWidth="40"
                      strokeDasharray="50 450"
                      strokeDashoffset="-330"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#F9E79F"
                      strokeWidth="40"
                      strokeDasharray="30 470"
                      strokeDashoffset="-380"
                    />
                  </svg>
                  <div className="chart-legend">
                    <div className="legend-item">
                      <span
                        className="legend-color"
                        style={{ backgroundColor: "#E89B3C" }}
                      ></span>{" "}
                      Joyful
                    </div>
                    <div className="legend-item">
                      <span
                        className="legend-color"
                        style={{ backgroundColor: "#F39C12" }}
                      ></span>{" "}
                      Anxious
                    </div>
                    <div className="legend-item">
                      <span
                        className="legend-color"
                        style={{ backgroundColor: "#F4D03F" }}
                      ></span>{" "}
                      Sad
                    </div>
                    <div className="legend-item">
                      <span
                        className="legend-color"
                        style={{ backgroundColor: "#F7DC6F" }}
                      ></span>{" "}
                      Excited
                    </div>
                    <div className="legend-item">
                      <span
                        className="legend-color"
                        style={{ backgroundColor: "#F9E79F" }}
                      ></span>{" "}
                      Tired
                    </div>
                  </div>
                </div>
                <p className="new-day-text">
                  New day <span>15%</span>
                </p>
              </div>

              {/* Compare to Last Week */}
              <div className="chart-card">
                <h3 className="section-title">
                  Compare to
                  <br />
                  last week
                </h3>
                <div className="bar-chart">
                  <div className="week-label">Week 39</div>
                  <div className="week-label active">Week 40</div>
                  <div className="bars">
                    <div
                      className="bar"
                      style={{ height: "80px", backgroundColor: "#F39C12" }}
                    ></div>
                    <div
                      className="bar"
                      style={{ height: "120px", backgroundColor: "#E89B3C" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* High & Low Emotion Hours */}
              <div className="chart-card emotion-hours">
                <h3 className="section-title">High & low emotion hours</h3>
                <div className="heatmap">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className="heatmap-cell"
                      style={{
                        backgroundColor:
                          i < 6
                            ? "#F9E79F"
                            : i < 12
                            ? "#F7DC6F"
                            : i < 18
                            ? "#F4D03F"
                            : i < 20
                            ? "#F39C12"
                            : "#E89B3C",
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
              <h3 className="sidebar-title">
                Improvement suggestions from Emo
              </h3>
              <div className="suggestion-content">
                <div className="bear-mascot">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                  >
                    <circle cx="30" cy="30" r="20" fill="#F4D03F" />
                    <circle cx="90" cy="30" r="20" fill="#F4D03F" />
                    <rect
                      x="20"
                      y="40"
                      width="80"
                      height="70"
                      rx="15"
                      fill="#F4D03F"
                    />
                    <circle cx="45" cy="60" r="3" fill="#333" />
                    <circle cx="75" cy="60" r="3" fill="#333" />
                    <path
                      d="M 50 75 Q 60 80 70 75"
                      stroke="#333"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="95" cy="75" r="8" fill="#F39C12" />
                  </svg>
                </div>
                <p className="suggestion-text">
                  You seem to be stressed in the middle of the week. Try the
                  4-7-8 breathing exercise!
                </p>
                <button className="try-now-btn">Try now</button>
              </div>
            </div>

            {/* Personal Goal */}
            <div className="goal-card">
              <h3 className="sidebar-title">Personal goal</h3>
              {/* Goal content can be added here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmoteTrend;
