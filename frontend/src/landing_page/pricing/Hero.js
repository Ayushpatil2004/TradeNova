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
      <div className="row p-5">
        <div className="col-4 text-center p-3">
          <img style={{ width: "70%" }} src="media/images/pricing-eq(0).svg" />
          <h1 className="fs-2">Free equity delivery</h1>
          <p className="px-5 py-2">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center p-3">
          <img
            style={{ width: "70%" }}
            src="media/images/other-trades(20).svg"
          />
          <h1 className="fs-2">Intraday and F&O trades</h1>
          <p className="px-5 py-2">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-center p-3">
          <img style={{ width: "70%" }} src="media/images/pricing-eq(0).svg" />
          <h1 className="fs-2">Free direct MF</h1>
          <p className="px-5 py-2">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
