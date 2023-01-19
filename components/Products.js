import React from 'react';


const Products = (props) =>{



    return(
        <div className="my-10 border border-1 border-gray-500 rounded w-full mx-10 lg:w-1/4 hover:shadow-lg hover:scale-110 duration-150">
            <div className=" rounded overflow-hidden flex flex-col">
                <div className="">
                    <img className="h-2/4" src={props.data.imgUrl} alt="product card image" />
                </div>
                <div className="px-6 py-4">
                    <div className="">
                        <h1 className="capitalize text-2xl">{props.data.name}</h1>
                        <p className="mt-4 text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                    </div>
                    <div className="mt-4">
                        <button className="bg-gray-700 text-white px-6 py-2 hover:bg-gray-900">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Products;