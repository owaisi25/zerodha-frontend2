import React from 'react';

function Hero() {
  return (
    <section className="container-fluid bg-primary text-white" id="supporthero">
      <div className="row p-5 mb-5" id="supportwrapper">
        
        {/* Left Section */}
        <div className="col-md-8">
          <h3 className="fs-2 fw-semibold">Support Portal</h3>
          <p className="mt-3 fs-5">
            Search for an answer or browse help topics <br />
            to create a ticket
          </p>

          {/* Search Box */}
          <div className="mt-4">
            <input
              type="text"
              className="form-control w-75"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
            />
          </div>

          {/* Links */}
          <div className="mt-3">
            <a href="#" className="text-white me-3 text-decoration-underline">
              Track account opening
            </a>
            <a href="#" className="text-white me-3 text-decoration-underline">
              Track segment activation
            </a>
            <a href="#" className="text-white me-3 text-decoration-underline">
              Intraday margins
            </a>
            <a href="#" className="text-white text-decoration-underline">
              Kite user manual
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-4">
          <h5 className="fw-semibold">Featured</h5>
          <ol className="mt-3">
            <li>
              <a href="#" className="text-white text-decoration-underline">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-decoration-underline">
                Latest Intraday leverages - MIS &amp; CO
              </a>
            </li>
          </ol>
        </div>

      </div>
    </section>
  );
}

export default Hero;
