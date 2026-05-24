import React from "react";

function RightSection({imageURL, productName, productDescription, learnMore}) {
  return (
  return (
    <div className="container mt-5 py-3">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="d-none d-md-block col-md-1"></div>
        <div className="col-12 col-md-5 text-md-start text-center mb-4 mb-md-0">
          <h1 className="mx-md-4 mx-0" style={{paddingBottom : "10px"}}>{productName}</h1>
          <p className="mx-md-4 mx-0 my-2">{productDescription}</p>
          <div className="mt-3">
            <a href={learnMore} style={{ textDecoration : "none" , color : "#16DB65"}} className="mx-md-4 mx-0 my-2 d-inline-block">
              Learn More
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img src={imageURL} className="img-fluid" style={{maxHeight: "380px"}} alt={productName}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
