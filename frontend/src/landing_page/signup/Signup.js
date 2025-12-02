import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const { fullname, username, email, password, phone } = inputValue;

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
      const payload = {
        fullname,
        username,
        email,
        password,
        phone,
      };

      const { data } = await axios.post(
        window.location.href = process.env.REACT_APP_API_URL + "/signup",
        payload,
        { withCredentials: true }
      );

      if (data.success) {
        handleSuccess("Signup successful!");
        setTimeout(() => navigate(process.env.REACT_APP_DASHBOARD_URL+"/"), 700); // Auto-login → redirect home
      } else {
        handleError(data.message);
      }
    } catch (err) {
      handleError("Something went wrong");
      console.log(err);
    }
  };

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <div className="card" style={{ width: "40%", margin: "auto" }}>
        <div className="card-body">
          <h3 className="text-center mb-4">Create Your Account</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullname"
              className="form-control mb-3"
              placeholder="Full Name"
              value={fullname}
              onChange={handleOnChange}
            />

            <input
              type="text"
              name="username"
              className="form-control mb-3"
              placeholder="Username"
              value={username}
              onChange={handleOnChange}
            />

            <input
              type="email"
              name="email"
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={handleOnChange}
            />

            <input
              type="password"
              name="password"
              className="form-control mb-3"
              placeholder="Password"
              value={password}
              onChange={handleOnChange}
            />

            <input
              type="text"
              name="phone"
              className="form-control mb-3"
              placeholder="Phone"
              value={phone}
              onChange={handleOnChange}
            />

            <button
              type="submit"
              className="btn w-100 mt-2 signup-btn"
              style={{ backgroundColor: "#16DB65", fontSize: "18px" }}
            >
              Signup
            </button>
          </form>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#16DB65" }}
            >
              Login
            </Link>
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Signup;
