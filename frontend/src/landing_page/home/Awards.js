import React from 'react';

function Awards() {
    return (
        <div className='container mt-2'>
            <div className='row'>
                <div className='col-6 p-5'>
                    {/* eslint-disable-next-line */}
                    <img src='/media/images/largestBroker.svg'/>
                </div>
                <div className='col-6 p-3 mt-5'>
                    <h1 className='mb-3'>Largest stock broker in India</h1>
                    <p className='mb-4' >2+ million TradeNova clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>
                                        Futures and Options
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Commodity derivatives
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Currency derivatives
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>
                                        Stocks and IPOs
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Direct mutual funds
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Bonds and Govt. Securities
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* eslint-disable-next-line */}
                    <img src='/media/images/pressLogos.png' style={{width : "90%", marginLeft : "10px"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;