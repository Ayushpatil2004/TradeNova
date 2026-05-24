import React from "react";

function Team(){
  return(
      <div className="container">
        <div className="row p-3 mt-5">
          <h1 className="fs-2 text-center">People</h1>
        </div>
        <div
          className="row p-3 text-muted align-items-center"
          style={{ lineHeight: "1.8", fontSize: "1.2em", fontWeight: "500" }}
        >
          <div className="col-12 col-md-6 p-md-5 p-3 text-center">
            <img
              src="/media/images/Ayush.png"
              style={{ borderRadius: "100%", width: "50%", maxWidth: "200px" }}
              alt="Ayush"
            />
            <h4 className="mt-4">Ayush Patil</h4>
            <h6 className="mb-4">Founder, CEO</h6>
          </div>
          <div className="col-12 col-md-6 p-3 fs-6">
            <p>Ayush bootstrapped and founded TradeNova in 2024 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            TradeNova has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).</p>
            <p>Connect on <a href="" style={{ textDecoration: "none", color : "#16DB65" }}>Homepage</a><a href="" style={{ textDecoration: "none", color : "#16DB65" }}>TradingQnA</a>/<a href="" style={{ textDecoration: "none", color : "#16DB65" }}>Twitter</a></p>
          </div>
        </div>
        </div>
   
  );
}

export default Team;