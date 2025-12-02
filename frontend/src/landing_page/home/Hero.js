import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        {/* eslint-disable-next-line */}
        <img
          src="/Media/images/homeHero.png"
          alt="Hero Image"
          style={{
            height: "525px",
            width: "1266px",
            marginLeft: "30px",
            maxWidth: "4000px",
            marginTop: "55px",
            marginBottom: "30px",
          }}
        />
        <h1 className="mt-5" style={{ fontSize: "2.5rem", lineHeight: "1.25" }}>
          Invest in everything
        </h1>
        <p
          style={{
            fontSize: "1.12rem",
            fontWeight: "400",
            marginTop: "10px",
            lineHeight: "1.8",
          }}
          className="text-muted"
        >
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link
          class="nav-link active text-muted"
          aria-current="page"
          to="/signup"
          onClick={() => window.scrollTo(0, 0)}
        >
          <button
            class="btn mb-5 signup-btn"
            style={{
              width: "16%",
              margin: "0px auto",
              backgroundColor: "#16DB65",
              color: "#020202",
              fontSize: "18px",
            }}
          >
            Sign up for free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
