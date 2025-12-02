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
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 style={{paddingBottom : "10px"}} className="mx-4">{productName}</h1>
          <p className="mx-4">{productDescription}</p>
          <div className="py-2">
            <a href={tryDemo} style={{ textDecoration : "none" , color : "#16DB65"}} className="mx-4">
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "50px", textDecoration : "none", color : "#16DB65"}} className="mx-3">
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} className="mx-4">
              <img src="/media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }} className="mx-1">
              <img src="/media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
