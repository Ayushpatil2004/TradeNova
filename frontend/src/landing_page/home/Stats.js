import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h2 className="mb-5 fs-2">Trust with confidence</h2>
          <h3 className="fs-5">Customer-first always</h3>
          <p className="text-muted">
            That's why 1.5+ crore customers trust TradeNova with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h3 className="fs-5">No spam or gimmicks</h3>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h3 className="fs-5">The Zerodha universe</h3>
          <p className="text-muted" >
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="fs-5">Do better with money</h3>
          <p className="text-muted" >
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5">
          {/* eslint-disable-next-line */}
          <img src="media/images/ecosystem.png" style={{ width: "100%" }} alt="Ecosystem"/>
          <div className="text-center">
            {/* eslint-disable-next-line */}
            <a href="" className="mx-5" style={{textDecoration : "none", color : "#16DB65"}}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            {/* eslint-disable-next-line */}
            <a href=""  style={{textDecoration : "none", color : "#16DB65"}}>
              Try Kite demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
