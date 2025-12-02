import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-2" style={{ marginTop: "70px" }}>
      <div className="row text-center">
        {/* eslint-disable-next-line */}
        <h1
          className="mt-4 mb-4"
          style={{ fontSize: "2.75rem", lineHeight: "1.25" }}
        >
          Open a TradeNova account
        </h1>
        <p
          className="text-muted mb-4"
        >
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
         <Link
          class="nav-link active text-muted"
          aria-current="page"
          to="/signup"
          onClick={() => window.scrollTo(0, 0)}
        >
        <button
         class="btn mb-5 signup-btn"
         style={{width: "16%", margin: "0px auto", backgroundColor: " #16DB65", color: "#020202", fontSize: "18px"}}
        >
          Sign up for free
        </button>
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
