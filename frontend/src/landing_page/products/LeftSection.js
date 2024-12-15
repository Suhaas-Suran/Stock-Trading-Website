import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  demoText = "Try Demo",
  learnMoreText = "Learn More",
  showDemoArrow = true,
  showLearnMoreArrow = true,
  customStyle = {}, // Prop for custom styles
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-7">
          <img src={imageURL} alt={`${productName}`} />
        </div>
        <div className="col-4 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              {demoText}{" "}
              {showDemoArrow && (
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              )}
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              {learnMoreText}{" "}
              {showLearnMoreArrow && (
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              )}
            </a>
          </div>
          <div style={customStyle} className="mt-3"> {/* Apply custom styles here */}
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="google play" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appStoreBadge.svg"
                style={{ marginLeft: "50px" }}
                alt="app store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
