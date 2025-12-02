import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Navbar() {
  const [loggedUser, setLoggedUser] = useState(false);

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_API_URL +"/", {}, { withCredentials: true })
      .then((res) => {
        if (res.data.status) {
          setLoggedUser(true);
        } else {
          setLoggedUser(false);
        }
      })
      .catch(() => setLoggedUser(false));
  }, []);

  // Logout function
  const handleLogout = async () => {
    await axios.get(process.env.REACT_APP_API_URL +"/logout", {
      withCredentials: true,
    });
    setLoggedUser(false);
    window.location.href = process.env.REACT_APP_API_URL +"/";
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg border-bottom p-2 sticky-top"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container" style={{ marginRight: "160px" }}>
          <Link className="navbar-brand" to="/">
            <img
              src="/media/images/Tradenova.png"
              alt="Logo"
              style={{ width: "230%", marginLeft: "70px" }}
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
            style={{ marginLeft: "529px" }}
          >
            <form
              className="d-flex"
              role="search"
              style={{ marginLeft: "86px" }}
            >
              <ul className="navbar-nav mb-lg-0" style={{ fontSize: "1rem" }}>
                {/* Sign Up — always visible */}
                <li className="nav-item">
                  <Link
                    className="nav-link active text-muted"
                    aria-current="page"
                    to="/signup"
                    style={{ width: "70px" }}
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
                    <a
                      className="nav-link active text-muted"
                      href="http://localhost:3001/"
                      style={{ textDecoration: "none", color: "inherit", marginLeft: "29px" }}
                    >
                      <p className="menu">Dashboard</p>
                    </a>
                  </li>
                )}
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
