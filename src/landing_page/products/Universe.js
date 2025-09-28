import React from 'react';

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 p-3 mt-5">
                    <img src="/media/images/smallcaseLogo.png" alt="Smallcase Logo" />
                    <p className="text-small text-muted">Thematic Investing Platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="/media/images/StreakLogo.png" alt="Streak Logo" style={{ width: "100px" }} />
                    <p className="text-small text-muted">Algo & Strategy Platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="/media/images/sensibullLogo.svg" alt="Sensibull Logo" />
                    <p className="text-small text-muted">Options Trading Platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="/media/images/sensibullLogo.svg" alt="Sensibull Logo" />
                    <p className="text-small text-muted">Thematic Investing Platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="/media/images/goldenpiLogo.png" alt="GoldenPi Logo" />
                    <p className="text-small text-muted">Bonds Trading Platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="/media/images/dittoLogo.png" alt="Ditto Logo" style={{ width: "100px" }} />
                    <p className="text-small text-muted">Insurance</p>
                </div>

                <div className="d-flex justify-content-center">
                    <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "20%" }}>Signup Now</button>
                </div>
            </div>
        </div>
    );
}

export default Universe;
