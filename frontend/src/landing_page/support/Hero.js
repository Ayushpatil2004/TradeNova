import React from "react";


export default function Hero(){

    return(
        <section className="container-fluid py-4" id="supportHero" style={{backgroundColor:"#16DB65", color : "#020202"}}>
            <div className="container px-md-5 px-3">
                <div className="row align-items-center justify-content-between mb-4">
                    <div className="col-12 col-md-6 mt-4 mb-2 text-md-start text-center">
                        <h4>Support Portal</h4>
                    </div>
                    <div className="col-12 col-md-4 text-md-end text-center mb-3 mb-md-0 p-3">
                        <a href="#" id="hoverfade" style={{color : "#020202",textDecoration:"none"}} className="border-bottom p-2">Track tickets</a>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12 col-md-6 mb-5 text-md-start text-center">
                        <h4 className="mb-4">Search for an answer or browse help topics to create a ticket</h4>
                        <input placeholder="Eg: how to i activate F&O, why is my order getting rejected..." className="p-3 mb-3 w-100 rounded" style={{border:"none"}}/>
                        <br/>
                        
                        <div className="mt-3 mb-5 d-flex flex-wrap gap-3 justify-content-md-start justify-content-center">
                            <a href="#" style={{color:"#020202",textDecoration:"none",fontSize:"16px"}} className="border-bottom pb-1">Track account opening</a>
                            <a href="#" style={{color:"#020202",textDecoration:"none",fontSize:"16px"}} className="border-bottom pb-1">Track segment activation</a>
                            <a href="#" style={{color:"#020202",textDecoration:"none",fontSize:"16px"}} className="border-bottom pb-1">Intraday margins</a>
                            <a href="#" style={{color : "#020202",textDecoration:"none",fontSize:"16px"}} className="border-bottom pb-1">Kite user manual</a>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 mt-md-0 mt-2 text-md-start text-center">
                        <h5 className="mb-4 ms-md-5 ms-0">Featured</h5>
                        <div>
                            <ol style={{color:"#020202"}} className="ms-md-5 ms-0 text-start d-inline-block">
                                <li className="mb-3"><a href="#" style={{color:"#020202"}}>Latest Intraday leverages and Square-off timings</a></li>
                                <li><a href="#" style={{color:"#020202"}}>Surveillance measure on scrips - December 2024</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}