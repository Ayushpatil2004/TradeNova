import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
  return (
    <div className="container mt-5 p-md-5 p-3">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img src={imageURL} className="img-fluid" style={{maxHeight: "380px"}} alt={productName}/>
        </div>
        <div className="col-12 col-md-6 p-md-5 p-3">
          <h1 style={{paddingBottom : "10px"}} className="mx-md-4 mx-0 text-md-start text-center">{productName}</h1>
          <p className="mx-md-4 mx-0 text-md-start text-center">{productDescription}</p>
          <div className="py-2 text-md-start text-center">
            <a href={tryDemo} style={{ textDecoration : "none" , color : "#16DB65"}} className="mx-md-4 mx-2 d-inline-block my-1">
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} style={{ textDecoration : "none", color : "#16DB65"}} className="mx-md-4 mx-2 d-inline-block my-1">
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3 text-md-start text-center">
            <a href={googlePlay} className="mx-md-4 mx-2 d-inline-block my-1">
              <img src="/media/images/googlePlayBadge.svg" className="img-fluid" style={{height: "40px"}} alt="Google Play"/>
            </a>
            <a href={appStore} className="mx-md-4 mx-2 d-inline-block my-1">
              <img src="/media/images/appstoreBadge.svg" className="img-fluid" style={{height: "40px"}} alt="App Store"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
