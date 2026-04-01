import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({ availableProducts }) => {
  return (
    <div className="border-b-2 border-b-gray-200">
      <div className="container mx-auto py-2">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <a className=" mr-2 font-semibold lg:font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent lg:text-4xl">
              DigiTools
            </a>
          </div>

          <div className="navbar-center lg:flex">
            <ul className="flex justify-center items-center gap-5 text-[10px] lg:text-[20px]">
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-4">
            <div>
              <CiShoppingCart className="w-6 h-6 relative" />
              {availableProducts.length > 0 && (
                <span className="absolute top-1 right-[0px] lg:top-1 lg:right-[200px]
                 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {availableProducts.length}
                </span>
              )}
            </div>
            <p className="text-[10px] md:text-xl font-semibold">Login</p>
            <button className="flex justify-center items-center hidden  md:block btn bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
