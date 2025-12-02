import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
             {/* eslint-disable-next-line */}
            <img src="/media/images/education.svg" style={{width : "70%"}}/>
        </div>
        <div className="col-6 mb-3" style={{marginLeft : "38px", width : "622px"}}>
          <h1 className="mb-5 fs-2">
            Free and open market education
          </h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          {/* eslint-disable-next-line */}
          <a href="" style={{ textDecoration: "none", color : "#16DB65"}}>
            Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          {/* eslint-disable-next-line */}
          <a href="" style={{ textDecoration: "none", color : "#16DB65"}}>
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
