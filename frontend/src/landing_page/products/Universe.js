import React from "react";

function Universe() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row text-center" style={{marginBottom : "20px"}}>
          <h1>The TradeNova Universe</h1>
          <p style={{marginTop : "20px"}}>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/zerodhaFundhouse.png" style={{height : "55px", maxWidth : "100%", marginBottom : "15px"}}/>
            <p className="text-muted text-small" style={{fontSize : "1rem", lineHeight : "18px", marginTop : "10px"}}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/sensibullLogo.svg" style={{height : "55px", maxWidth : "100%", marginBottom : "15px"}}/>
            <p className="text-muted text-small" style={{fontSize : "1rem", lineHeight : "18px", marginTop : "10px"}}>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/tijori.svg" style={{height : "55px", maxWidth : "100%", marginBottom : "15px"}}/>
            <p className="text-muted text-small" style={{fontSize : "1rem", lineHeight : "18px", marginTop : "10px"}}>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/streakLogo.png" style={{height : "55px", maxWidth : "100%", marginBottom : "15px"}}/>
            <p className="text-muted text-small" style={{fontSize : "1rem", lineHeight : "18px", marginTop : "10px"}}>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/smallcaseLogo.png" style={{height : "55px", maxWidth : "100%", marginBottom : "15px"}}/>
            <p className="text-muted text-small" style={{fontSize : "1rem", lineHeight : "18px", marginTop : "10px"}}>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/dittoLogo.png" style={{height : "55px", maxWidth : "100%", marginBottom : "15px"}}/>
            <p className="text-muted text-small" style={{fontSize : "1rem", lineHeight : "18px", marginTop : "10px"}}>
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
          <button
         class="btn mb-5 mt-5"
         style={{width: "16%", margin: "0px auto", backgroundColor: " #16DB65", color: "#020202", fontSize: "18px"}}
        >
          Sign up for free
        </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
