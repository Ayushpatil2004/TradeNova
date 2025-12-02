import React from "react";

function RightSection({imageURL, productName, productDescription, learnMore}) {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-1"></div>
        <div className="col-5">
          <h1 className="mx-4" style={{paddingBottom : "10px"}}>{productName}</h1>
          <p className="mx-4 my-2">{productDescription}</p>
          <div className="mt-3">
            <a href={learnMore} style={{ textDecoration : "none" , color : "#16DB65"}} className="mx-4 my-2">
              Learn More
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
