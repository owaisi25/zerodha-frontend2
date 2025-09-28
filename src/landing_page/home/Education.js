import React from 'react';

function Education() {
    const imageStyle = {
        width: "80%",
    };

    const headingStyle = {
        fontWeight: "bold",
        fontSize: "1.5rem",
    };

    const linkStyle = {
        display: "block",
        color: "#007bff",
        textDecoration: "none",
        marginBottom: "1rem",
    };

    return (
        <div className="container my-5">
            <div className="row align-items-center">
                {/* Left Side: Image */}
                <div className="col-md-6 text-center">
                    <img
                        src="/media/images/education.svg"
                        alt="Varsity Illustration"
                        style={imageStyle}
                    />
                </div>

                {/* Right Side: Text */}
                <div className="col-md-6">
                    <h3 style={headingStyle}>Free and open market education</h3>
                    <p>
                        Varsity, the largest online stock market education book in the world
                        covering everything from the basics to advanced trading.
                    </p>
                    <a href="#" style={linkStyle}>
                        Varsity &rarr;
                    </a>

                    <p>
                        TradingQ&A, the most active trading and investment community in India
                        for all your market related queries.
                    </p>
                    <a href="#" style={linkStyle}>
                        TradingQ&A &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;

