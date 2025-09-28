import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img 
                        src='/media/images/largestBroker.svg' 
                        alt='Largest Broker' 
                    />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1 style={{ fontSize: '1.75rem' }}>Largest stock broker in India</h1>

                    <p className='mb-5'>
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>

                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity Derivatives</li>
                                <li>Currency Derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt securities</li>
                            </ul>
                        </div>
                    </div>

                    <img 
                        src='/media/images/pressLogos.png' 
                        style={{ width: "90%" }} 
                        alt="Press Logos"
                    />
                </div>
            </div>
        </div>
    );
}

export default Awards;

