import React from "react";

function Hero() {
  return (
    <div className="container text-center">
      <div className="row p-5 mb-5" style={{ marginTop: "60px" }}>
        <h1 className="text-center" style={{ fontSize: "44px" }}>
          Charges
        </h1>
        <p className="text-center text-muted p-3" style={{ fontSize: "20px" }}>
          List of all charges and taxes
        </p>
      </div>
      <div className="row p-md-5 p-2 align-items-stretch">
        <div className="col-12 col-md-4 text-center p-3 mb-4 mb-md-0">
          <img style={{ width: "70%", maxWidth: "150px" }} className="img-fluid mb-3" src="/media/images/pricing-eq(0).svg" alt="Free delivery"/>
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="px-md-5 px-3 py-2 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 text-center p-3 mb-4 mb-md-0">
          <img
            style={{ width: "70%", maxWidth: "150px" }}
            className="img-fluid mb-3"
            src="/media/images/other-trades(20).svg"
            alt="Intraday and F&O"
          />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="px-md-5 px-3 py-2 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-md-4 text-center p-3 mb-4 mb-md-0">
          <img style={{ width: "70%", maxWidth: "150px" }} className="img-fluid mb-3" src="/media/images/pricing-eq(0).svg" alt="Free direct MF"/>
          <h1 className="fs-3">Free direct MF</h1>
          <p className="px-md-5 px-3 py-2 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
