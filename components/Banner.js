import React from 'react';


const Banner = () =>{



    return(
        <div className="mt-0 relative" id="banner-container">
            <div className="relative">
                <img className="brightness-75" src="./banner-bg.jpg" alt="banner background" />
            </div>
            <div className="absolute z-2 top-0 w-full flex justify-center items-center" id="banner-text-container">
                <div className="w-fit flex flex-col items-center mt-20">
                    <h1 className="uppercase text-3xl lg:text-5xl">Complete The Look</h1>
                    <button className="capitalize text-black text-center border border-black mt-6 px-16 py-2 lg:mt-10  hover:text-white hover:bg-black">shop now</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;
