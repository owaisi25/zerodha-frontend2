import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center p-5">
        {/* Left side - Image */}
        <div className="col-md-6 text-center">
          <img src={imageUrl} alt={productName} className="img-fluid" />
        </div>

        {/* Right side - Content */}
        <div className="col-md-6 mt-4 mt-md-0">
          <h2 className="fw-bold">{productName}</h2>
          <p className="text-muted">{productDescription}</p>

          <div className="mb-3">
            <a href={tryDemo} className="me-4 text-decoration-none">
              Try demo →
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn more →
            </a>
          </div>

          <div className="d-flex align-items-center gap-3">
            <a href={googlePlay}>
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="Get it on Google Play"
                style={{ height: "40px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="/media/images/appstoreBadge.svg"
                alt="Download on App Store"
                style={{ height: "40px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

