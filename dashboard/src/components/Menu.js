import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const [user, setUsername] = useState("");
  const [initials, setInitials] = useState("");

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");
    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);
      const cleanUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, cleanUrl);
    }

    const token = tokenFromUrl || localStorage.getItem("token");

    axios
      .post(
        process.env.REACT_APP_API_URL + "/",
        {},
        {
          withCredentials: true,
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      )
      .then((res) => {
        if (res.data.status) {
          // Username
          setUsername(res.data.user);

          // Fullname → initials
          const fullname = res.data.fullname || "";
          const parts = fullname.trim().split(/\s+/);

          if (parts.length >= 2) {
            const first = parts[0][0];
            const last = parts[1][0];
            setInitials((first + last).toUpperCase());
          } else if (parts.length === 1 && parts[0]) {
            // If only one name
            setInitials(parts[0][0].toUpperCase());
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const frontendUrl = process.env.REACT_APP_FRONTEND_URL || "https://tradenova-frontend-mn69.onrender.com/";

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.get(process.env.REACT_APP_API_URL + "/logout", {
        withCredentials: true,
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
    } catch (e) {
      console.log(e);
    }
    localStorage.removeItem("token");
    window.location.href = (process.env.REACT_APP_FRONTEND_URL || "https://tradenova-frontend-mn69.onrender.com").replace(/\/$/, "") + "/";
  };

  return (
    <div className="menu-container">
      <a href={frontendUrl}>
        <img src="logo.png" style={{ width: "50px", cursor: "pointer" }} alt="Logo" />
      </a>

      <div className="menus">
        <ul>
          <li>
            <a
              style={{ textDecoration: "none" }}
              href={frontendUrl}
            >
              <p className={menuClass}>Home</p>
            </a>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile-wrapper" style={{ position: "relative" }}>
          <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
            <div className="avatar">{initials || "U"}</div>
            <p className="username">{user || "USER"}</p>
          </div>

          {isProfileDropdownOpen && (
            <div
              className="profile-dropdown"
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                backgroundColor: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                borderRadius: "6px",
                padding: "12px 16px",
                zIndex: 1000,
                minWidth: "160px",
                marginTop: "8px",
              }}
            >
              <p style={{ margin: "0 0 4px 0", fontWeight: "600", color: "#333", fontSize: "14px" }}>
                {user || "User"}
              </p>
              <hr style={{ margin: "6px 0", borderColor: "#eee" }} />
              <button
                onClick={handleLogout}
                style={{
                  background: "none",
                  border: "none",
                  color: "#df514c",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "14px",
                  padding: "4px 0",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
