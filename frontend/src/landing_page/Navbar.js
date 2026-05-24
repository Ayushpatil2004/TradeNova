import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Navbar() {
  const [loggedUser, setLoggedUser] = useState(false);

  const checkLogin = () => {
    axios
      .post(process.env.REACT_APP_API_URL + "/", {}, { withCredentials: true })
      .then((res) => {
        setLoggedUser(res.data.status);
      })
      .catch(() => setLoggedUser(false));
  };

  useEffect(() => {
    checkLogin();

    // refresh navbar when window comes back into focus
    window.addEventListener("focus", checkLogin);

    return () => window.removeEventListener("focus", checkLogin);
  }, []);

  // Logout function
  const handleLogout = async () => {
    await axios.get(process.env.REACT_APP_API_URL + "/logout", {
      withCredentials: true,
    });

    setLoggedUser(false);

    // redirect to frontend home, NOT backend
    window.location.assign("https://tradenova-frontend-mn69.onrender.com/");
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg border-bottom p-2 sticky-top"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="/media/images/Tradenova.png"
              alt="Logo"
              style={{ height: "45px", width: "auto" }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ fontSize: "1rem" }}>
              {/* Sign Up — always visible */}
              <li className="nav-item">
                <Link
                  className="nav-link active text-muted"
                  aria-current="page"
                  to="/signup"
                >
                  Sign up
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-muted" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-muted" to="/product">
                  Product
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-muted" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-muted" to="/support">
                  Support
                </Link>
              </li>

              {!loggedUser ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active text-muted"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <span
                    className="nav-link active text-muted"
                    style={{ cursor: "pointer" }}
                    onClick={handleLogout}
                  >
                    Logout
                  </span>
                </li>
              )}
              {loggedUser && (
                <li className="nav-item">
                  <span
                    className="nav-link active text-muted"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      window.location.assign(
                        "https://tradenova-agcz.onrender.com/"
                      )
                    }
                  >
                    Dashboard
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
