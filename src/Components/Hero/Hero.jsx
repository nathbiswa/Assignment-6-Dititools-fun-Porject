import React from "react";
import { IoPlayOutline } from "react-icons/io5";
import heroImg from "../../assets/banner.png";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="hero flex items-center justify-between mt-10 gap-2">
        <div className="hero-left flex-1">
          <div className="flex justify-center items-center gap-4 bg-[#E1E7FF] px-4 py-2 rounded-full w-max mb-6">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <div>
              <h2 className="text-1xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                New: AI-Powered Tools Available
              </h2>
            </div>
          </div>
          <div>
            <h1 className="text-7xl font-bold mb-6">
              Supercharge Your
              <br />
              Digital Workflow
            </h1>
            <p>
              Access premium AI tools, design assets, templates, and
              productivity <br /> software—all in one place. Start creating faster
              today. <br /> Explore Products
            </p>
          </div>
          <div className="flex gap-2 mt-6">
            <button className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-[12px]
             text-white rounded-full">
              Explore Products
            </button>
            <button className="btn btn-outline rounded-full ">
              <IoPlayOutline /> Watch Demo
            </button>
          </div>
        </div>
        <div className="hero-right position-center">
            <img src={heroImg} alt="Hero Image" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
