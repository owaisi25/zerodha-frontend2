import React from 'react';

function Pricing() {
    // Inline styles
    const rupeeStyle = {
        color: '#f79a0e',
        fontWeight: 'bold',
        fontSize: '2.5rem',
        marginBottom: '0.5rem',
    };

    const featureTextStyle = {
        fontSize: '0.95rem',
        color: '#555',
        lineHeight: '1.4',
    };

    const headingStyle = {
        fontWeight: 600,
        fontSize: '2rem',
        marginBottom: '1rem',
    };

    const linkStyle = {
        textDecoration: 'none',
        fontWeight: 500,
    };

    return (
        <div className="container my-5">
            <div className="row align-items-center">

                {/* Left Text Section */}
                <div className="col-md-6 mb-4">
                    <h2 style={headingStyle}>Unbeatable pricing</h2>
                    <p className="mb-3">
                        We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges.
                    </p>
                    <a href="#" className="text-primary" style={linkStyle}>
                        See pricing <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
                    </a>
                </div>

                {/* Right Feature Boxes */}
                <div className="col-md-6">
                    <div className="row text-center">

                        <div className="col-4 mb-3">
                            <div>
                                <div style={rupeeStyle}>₹0</div>
                                <p style={featureTextStyle}>
                                    Free account<br />opening
                                </p>
                            </div>
                        </div>

                        <div className="col-4 mb-3">
                            <div>
                                <div style={rupeeStyle}>₹0</div>
                                <p style={featureTextStyle}>
                                    Free equity delivery<br />and direct mutual funds
                                </p>
                            </div>
                        </div>

                        <div className="col-4 mb-3">
                            <div>
                                <div style={rupeeStyle}>₹20</div>
                                <p style={featureTextStyle}>
                                    Intraday and<br />F&amp;O
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;
