import React from "react";

function RightSection({
  productName,
  productDescription,
  learnMore,
  imageURL,
  learnMoreText, // Add learnMoreText prop
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-4">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              {learnMoreText}{" "} {/* Use learnMoreText instead of hardcoded text */}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-7 text-center align-image">
          <img
            src={imageURL}
            alt={`${productName}`}
            className="product-image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
