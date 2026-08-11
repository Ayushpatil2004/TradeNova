import React, { useState, useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const frontendUrl =
        process.env.REACT_APP_FRONTEND_URL || "https://tradenova-frontend-mn69.onrender.com";
      const loginRedirectUrl = `${frontendUrl.replace(/\/$/, "")}/login`;

      const action = urlParams.get("action");
      if (action === "logout") {
        localStorage.removeItem("token");
        const cleanUrl = window.location.pathname + window.location.hash;
        window.history.replaceState({}, document.title, cleanUrl);
        window.location.href = loginRedirectUrl;
        return;
      }

      const tokenFromUrl = urlParams.get("token");
      if (tokenFromUrl) {
        localStorage.setItem("token", tokenFromUrl);
        const cleanUrl = window.location.pathname + window.location.hash;
        window.history.replaceState({}, document.title, cleanUrl);
      }

      const token = tokenFromUrl || localStorage.getItem("token");

      if (!token) {
        window.location.href = loginRedirectUrl;
        return;
      }

      try {
        const res = await axios.post(
          process.env.REACT_APP_API_URL + "/",
          {},
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (res.data && res.data.status) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("token");
          window.location.href = loginRedirectUrl;
        }
      } catch (error) {
        console.error("Auth verification error:", error);
        localStorage.removeItem("token");
        window.location.href = loginRedirectUrl;
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#fbfbfb",
          fontFamily: "sans-serif",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            border: "4px solid #f3f3f3",
            borderTop: "4px solid #16DB65",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
        <p style={{ color: "#666", fontSize: "16px" }}>Authenticating session...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;