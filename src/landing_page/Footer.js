import React from "react";

function Footer() {
  return (
    <footer className="footer bg-light mt-5 pt-5 pb-3 border-top">
      <div className="container">
        <div className="row justify-content-around">
          {/* Logo & Social Media */}
          <div className="col-md mb-4">
            <img
              src="media/images/logo.svg"
              alt="Zerodha Logo"
              style={{ width: "60%" }}
            />
            <p className="mt-3 text-muted small">
              © 2010 - 2024, Not Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#"><i className="bi-twitter-x"></i></a>
              <a href="#"><i className="bi-facebook"></i></a>
              <a href="#"><i className="bi-instagram"></i></a>
              <a href="#"><i className="bi-linkedin"></i></a>
              <a href="#"><i className="bi-telegram"></i></a>
            </div>
          </div>

          {/* Company Section */}
          <div className="col-md mb-4">
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li><a href="#">About</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Referral programme</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Zerodha.tech</a></li>
              <li><a href="#">Press & media</a></li>
              <li><a href="#">Zerodha cares (CSR)</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-md mb-4">
            <h6>Support</h6>
            <ul className="list-unstyled">
              <li><a href="#">Contact</a></li>
              <li><a href="#">Support portal</a></li>
              <li><a href="#">Z-Connect blog</a></li>
              <li><a href="#">List of charges</a></li>
              <li><a href="#">Downloads & resources</a></li>
            </ul>
          </div>

          {/* Account Section */}
          <div className="col-md mb-4">
            <h6>Account</h6>
            <ul className="list-unstyled">
              <li><a href="#">Open an account</a></li>
              <li><a href="#">Fund transfer</a></li>
              <li><a href="#">60 day challenge</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Disclaimer Section - Full Width */}
{/* Disclaimer Section - True Full Width */}
{/* Disclaimer Section - Full Width */}
<div className="container-fluid mt-4 px-0">
  <div className="row gx-0">
    <div className="col text-center">
      <p className="text-muted small m-0 px-3">
        Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633 <br />
        CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 <br />
        MCX: 46025 – SEBI Registration no.: INZ000038238 <br />
        Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, J.P Nagar, Bengaluru, 560078 <br /><br />
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal... <br />
        Investments in securities market are subject to market risks; read all the related documents carefully before investing. <br />
        Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs...
      </p>
    </div>
  </div>
</div>

    </footer>
  );
}

export default Footer;