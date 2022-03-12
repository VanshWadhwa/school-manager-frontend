import { Link } from "react-router-dom";
import React from "react";
import Image from '../images/landingImage.jpg'

const Home = () => {
  return <div className="homepage">
    <nav className="Navbar bg-blue-500 shadow-md z-20 hidden xl:block fixed w-screen px-10">
      <div className='flex justify-between items-center text-md font-semibold text-white py-4'>
        <div className="text-3xl">School Manager</div>
        <div className="buttons flex justify-center items-center gap-5">
          <div className="border-2 px-5 py-2 rounded-xl">
            <Link to="/login">Login</Link>
          </div>
          <div className="border-2 bg-white text-blue-500 px-5 py-2 rounded-xl">
            <Link to="/signup">Register as School</Link>
          </div>
        </div>
      </div>
    </nav>
    <div className="relative">
      <img className="w-full" src={Image} />
      <div className="h-96 mt-64 absolute top-0 bottom-0 left-0 right-1/2 pl-20 spaxe-y-20 text-left">
        <div className="text-5xl text-white tracking-wide font-bold">An All-in-One School Management Software</div>
        <div className="text-2xl tracking-wide py-10">From fee payment, to attendance, <br/> all school related formalities at one place</div>
        <div className="bg-blue-500 text-xl text-white px-5 py-2 rounded-xl w-max text-center"><Link to='/signup'>Register School </Link></div>
      </div>
    </div>
    
  </div>;
};

export default Home;
