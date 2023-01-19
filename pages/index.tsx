import React,{useState} from 'react';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import Products from '../components/Products.js';
import Footer from '../components/Footer.js';


const Home = () =>{
  const [products, setProducts] = useState([
    {"name":"fossil watch","imgUrl":"watch.jpg"},
    {"name":"iMac","imgUrl":"imac.jpg"},
    {"name":"apple keyboard","imgUrl":"keyboard.jpg"},
    {"name":"joystick","imgUrl":"joystick.jpg"},
    {"name":"logitech mouse","imgUrl":"mouse.jpg"},
    {"name":"canon camera","imgUrl":"camera.jpg"}
  ])


  return(
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <div className="" >
        <Banner />
      </div>
      <div className="flex justify-between px-2 flex-wrap lg:px-4">
        {
          products.map((product) =>(
            <Products data={product}/>
          ))
        }
      </div>
      <div className="bg-black p-5">
        <Footer />
      </div>
    </div>
  )
}

export default Home;