import React from 'react';


const Footer = () =>{



    return(
        <div className="text-white flex justify-between items-center">
            <div className="select-none">
                <h1 className="text-xl">Wire Cart</h1>
                <p className="">B2B Market Place</p>
            </div>
            <div className="">
                <ul className="inline-flex">
                    <li className="mx-4"><a href="#">Home</a></li>
                    <li className="mx-4"><a href="#">Products</a></li>
                    <li className="mx-4"><a href="#">Contact US</a></li>
                    <li className="mx-4"><a href="#">Support</a></li>
                </ul>
            </div>
        </div>
    )
}


export default Footer;
