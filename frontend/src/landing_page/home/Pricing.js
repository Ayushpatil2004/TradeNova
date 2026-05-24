import React from 'react';

function Pricing() {
    return ( 
        <div className='container py-3'>
            <div className='row align-items-center justify-content-between'>
                <div className='col-12 col-md-5 mb-4 text-md-start text-center'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p >We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    {/* eslint-disable-next-line */}
                    <a href="" style={{textDecoration : "none", color : "#16DB65"}}>Pricing{" "}<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
                </div>

                <div className='col-12 col-md-6 mb-4'>
                    <div className='row text-center g-3'>
                        <div className='col border p-3'>
                            <h1 className='mb-3'>&#8377;0</h1>
                            <p className="mb-0">Free equity delivery<br/> and direct mutual funds</p>
                        </div>
                        <div className='col border p-3'>
                            <h1 className='mb-3'>&#8377;20</h1>
                            <p className="mb-0">Intraday and<br/> F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;