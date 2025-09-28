import React from 'react';
function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center p-5">
        {/* Left side - Content */}
        <div className="col-md-6 mt-4 mt-md-0">
          <h2 className="fw-bold">{productName}</h2>
          <p className="text-muted">{productDescription}</p>

          <div className="mb-3">
            <a href={learnMore} className="text-decoration-none">
              Learn more →
            </a>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="col-md-6 text-center">
          <img src={imageUrl} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;