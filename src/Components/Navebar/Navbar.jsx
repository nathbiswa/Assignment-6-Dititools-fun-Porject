import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="border-b-2 border-b-gray-200">
      <div className="container mx-auto py-2">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <a className=" font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-4xl">
              DigiTools
            </a>
          </div>

          <div className="navbar-center lg:flex">
            <ul className="flex justify-center items-center gap-5 text-[20px]">
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-4">
            <div><CiShoppingCart className="w-6 h-6"/></div>
            <p className="text-xl font-semibold">Login</p>
            <a className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              Get Started
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
