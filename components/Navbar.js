import React,{useState} from 'react';

const Navbar = () =>{

    const [topbar, setTopbar] = useState(false);
    const [a, setA] = useState(0);

    const navbarToggler = () =>{
        if(topbar){
            setTopbar(false);
        }else{
            setTopbar(true);
        }
    }
    return(
        <div className="w-full">
            {/*Navbar Main*/}
            <div className="">
                <div className="relative z-10 w-full primary p-3 flex items-center px-12 text-white">
                    <div className=" w-full hidden lg:block lg:w-1/3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <div className="w-full text-start lg:w-1/3 lg:text-center">
                        <h1 className="uppercase  text-2xl select-none"><a href="#">wire cart</a></h1>
                    </div>
                    <div className="hidden lg:w-1/3 lg:inline-flex items-center justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <h1>{a}</h1>
                    </div>
                    <div className="mt-0.5 lg:hidden" onClick={navbarToggler}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>
                {/*Sub Navbar sm*/}
                <div className="relative z-10 w-full bg-white inline-flex justify-around mt-3 py-2 mb-3  lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>
                {/*Sub Navbar lg*/}
                <div className=" relative hidden mt-2 mb-2 lg:w-full lg:flex justify-center ">
                    <ul className="subnavbar-menu">
                        <li className="uppercase mx-6"><a href="#">watches</a></li>
                        <li className="uppercase mx-6"><a href="#">sun glasses</a></li>
                        <li className="uppercase mx-6"><a href="#">cloths</a></li>
                        <li className="uppercase mx-6"><a href="#">electronics</a></li>
                        <li className="uppercase mx-6"><a href="#">home appliances</a></li>
                        <li className="uppercase mx-6"><a href="#">gift set</a></li>
                        <li className="uppercase mx-6"><a href="#">jewelry</a></li>
                    </ul>
                </div>
            </div>
            
             {/*topbar*/}
            <div className={(topbar?"topbar-container-Active":"topbar-container-unActive")}>
                <div className="py-2">
                    <ul className="text-white text-center text-xl">
                        <li className="uppercase mx-6 mt-3"><a href="#">watches</a></li>
                        <li className="uppercase mx-6 mt-3"><a href="#">sun glasses</a></li>
                        <li className="uppercase mx-6 mt-3"><a href="#">sun glasses</a></li>
                        <li className="uppercase mx-6 mt-3"><a href="#">cloths</a></li>
                        <li className="uppercase mx-6 mt-3"><a href="#">electronics</a></li>
                        <li className="uppercase mx-6 mt-3"><a href="#">home appliances</a></li>
                        <li className="uppercase mx-6 mt-3"><a href="#">gift set</a></li>
                        <li className="uppercase mx-6 mt-3"><a href="#">jewelry</a></li>
                    </ul>
                </div>
                
            </div>
            
        </div>
    )
}


export default Navbar;