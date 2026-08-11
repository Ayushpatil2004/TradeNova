import React, { useState } from "react";

const appsData = [
  {
    id: "coin",
    title: "TradeNova Coin",
    category: "Investments",
    tag: "Free",
    tagBg: "#e8f8ee",
    tagColor: "#16db65",
    icon: "🪙",
    iconBg: "linear-gradient(135deg, #16db65 0%, #0ebb52 100%)",
    description:
      "Direct mutual funds platform with 0% commission. Invest in SIPs, index funds, and ELSS tax saving funds seamlessly.",
    linkText: "Launch Coin",
  },
  {
    id: "smallcase",
    title: "Smallcase",
    category: "Investments",
    tag: "Integrated",
    tagBg: "#eef4ff",
    tagColor: "#387ed1",
    icon: "💼",
    iconBg: "linear-gradient(135deg, #387ed1 0%, #2563eb 100%)",
    description:
      "Invest in curated baskets of stocks and ETFs tailored to market trends, themes, and quantitative strategies.",
    linkText: "Explore Smallcases",
  },
  {
    id: "streak",
    title: "Streak",
    category: "Algo & Analytics",
    tag: "Free Trial",
    tagBg: "#fff4e5",
    tagColor: "#f56834",
    icon: "⚡",
    iconBg: "linear-gradient(135deg, #f56834 0%, #e04f18 100%)",
    description:
      "Create, backtest, and deploy algorithmic trading strategies on equity & futures markets without writing code.",
    linkText: "Start Backtesting",
  },
  {
    id: "sensibull",
    title: "Sensibull",
    category: "Algo & Analytics",
    tag: "Options F&O",
    tagBg: "#f3e8ff",
    tagColor: "#9333ea",
    icon: "📈",
    iconBg: "linear-gradient(135deg, #9333ea 0%, #7e22ce 100%)",
    description:
      "India's largest Options trading platform. Build option strategies, analyze pay-off charts, and track greeks.",
    linkText: "Open Sensibull",
  },
  {
    id: "tradingview",
    title: "TradingView Charts",
    category: "Tools",
    tag: "Pro Charts",
    tagBg: "#eef4ff",
    tagColor: "#0284c7",
    icon: "📊",
    iconBg: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
    description:
      "Advanced charting engine with 100+ technical indicators, drawing tools, multi-chart layouts, and real-time data feeds.",
    linkText: "View Charts",
  },
  {
    id: "kiteconnect",
    title: "TradeNova Connect API",
    category: "Tools",
    tag: "Developer",
    tagBg: "#f1f5f9",
    tagColor: "#475569",
    icon: "🔌",
    iconBg: "linear-gradient(135deg, #475569 0%, #334155 100%)",
    description:
      "Super-fast HTTP/JSON REST APIs for building your own trading terminal, automated bots, and algorithmic solutions.",
    linkText: "API Documentation",
  },
];

const Apps = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Investments", "Algo & Analytics", "Tools"];

  const filteredApps =
    selectedCategory === "All"
      ? appsData
      : appsData.filter((app) => app.category === selectedCategory);

  return (
    <div style={{ padding: "10px 5px 40px 5px", fontFamily: "inherit" }}>
      {/* Header Banner */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "28px",
          borderBottom: "1px solid #f0f0f0",
          paddingBottom: "18px",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: "400",
              color: "#333",
              margin: "0 0 6px 0",
            }}
          >
            Ecosystem Apps & Tools
          </h2>
          <p style={{ margin: 0, color: "#777", fontSize: "0.9rem" }}>
            Expand your trading capabilities with seamless integrated platforms
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: "flex", gap: "8px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "6px 14px",
                borderRadius: "20px",
                border: "1px solid",
                borderColor: selectedCategory === cat ? "#16db65" : "#e2e8f0",
                backgroundColor: selectedCategory === cat ? "#16db65" : "#ffffff",
                color: selectedCategory === cat ? "#ffffff" : "#64748b",
                fontWeight: selectedCategory === cat ? "600" : "400",
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "22px",
        }}
      >
        {filteredApps.map((app) => (
          <div
            key={app.id}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              border: "1px solid #eaeaea",
              padding: "22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.03)";
            }}
          >
            <div>
              {/* App Icon and Tag */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: app.iconBg,
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  {app.icon}
                </div>

                <span
                  style={{
                    backgroundColor: app.tagBg,
                    color: app.tagColor,
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    letterSpacing: "0.3px",
                  }}
                >
                  {app.tag}
                </span>
              </div>

              {/* Title & Description */}
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  color: "#222",
                  margin: "0 0 8px 0",
                }}
              >
                {app.title}
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "#666",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                {app.description}
              </p>
            </div>

            {/* Footer Action */}
            <div
              style={{
                marginTop: "20px",
                paddingTop: "14px",
                borderTop: "1px solid #f5f5f5",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                {app.category}
              </span>
              <button
                onClick={() => alert(`Launching ${app.title}...`)}
                style={{
                  backgroundColor: "transparent",
                  color: "#16db65",
                  border: "none",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: 0,
                }}
              >
                {app.linkText} →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
