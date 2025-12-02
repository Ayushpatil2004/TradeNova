import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });

  const { username, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, { position: "top-right" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "top-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_API_URL +"/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      );

      if (data.success) {
        handleSuccess(data.message);
        setTimeout(() => navigate(process.env.REACT_APP_DASHBOARD_URL+"/"), 700);
      } else {
        handleError(data.message);
      }
    } catch (err) {
      handleError("Something went wrong");
      console.log(err);
    }

    setInputValue({
      username: "",
      password: "",
    });
  };

  return (
    <div className="container" style={{ marginBottom: "40px" }}>
      <div
        className="card text-center"
        style={{ width: "30%", margin: "50px auto auto" }}
      >
        <div className="card-body">
          <div className="mt-3">
            <img
              src="/media/images/Tradenovacrop.png"
              alt="Tradenova Logo"
              style={{ width: "20%" }}
            />
          </div>

          <h5 className="card-title mt-4 mb-4">Login to TradeNova</h5>

          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={handleOnChange}
                placeholder="Username"
              />
              <label htmlFor="floatingInput">Username*</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Password"
              />
              <label htmlFor="floatingInput">Password*</label>
            </div>

            <div>
              <button
                type="submit"
                className="btn mb-3 mt-3 signup-btn"
                style={{
                  width: "30%",
                  backgroundColor: " #16DB65",
                  color: "#020202",
                  fontSize: "18px",
                }}
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-muted">
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "#16DB65" }}
            >
              Signup
            </Link>
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Login;
