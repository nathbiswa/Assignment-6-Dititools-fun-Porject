import React from "react";
import userImg from "../../assets/user.png";
import choosePoducts from "../../assets/package.png";
import startCreating from "../../assets/rocket.png";

const GetStart = () => {
  return (
    <div className="container mx-auto p-12">
      <div className="text-center py-12">
        <h2 className="text-[20px] lg:text-3xl font-bold mb-4">Get Started in 3 Steps</h2>
        <p className="text-[12px] lg:text-[1rem] text-gray-600 mb-6">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-4 mt-10 py-8">
        <div className=" w-full relative p-4 shadow-lg">
          <div
            className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500
             to-purple-600 absolute flex items-center justify-center font-bold text-white top-[-30px] right-[0px]"
          >
            01
          </div>
          <div className="flex justify-center p-10">
            <img src={userImg} alt="User" className=" p-4 rounded-full bg-gray-200" />
          </div>
          <div className="text-center space-y-3">
            <h1 className="text-2xl font-bold">Create Account</h1>
            <p className="text-gray-600 text-[1rem]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
        <div className=" relative p-4 shadow-lg">
          <div
            className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500
             to-purple-600 absolute flex items-center justify-center font-bold text-white top-[-30px] right-[0px]"
          >
            02
          </div>
          <div className="flex justify-center p-10">
            <img src={choosePoducts} alt="Choose Products" className=" p-4 rounded-full bg-gray-200" />
          </div>
          <div className="text-center space-y-3">
            <h1 className="text-2xl font-bold">Choose Products</h1>
            <p className="text-gray-600 text-[1rem]">
              Browse our catalog and select the toolsthat fit your needs.
            </p>
          </div>
        </div>
        <div className=" relative p-4 shadow-lg">
          <div
            className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500
             to-purple-600 absolute flex items-center justify-center font-bold text-white top-[-30px] right-[0px]"
          >
            03
          </div>
          <div className="flex justify-center p-10">
            <img src={startCreating} alt="Start Creating" className=" p-4 rounded-full bg-gray-200" />
          </div>
          <div className="text-center space-y-3">
            <h1 className="text-2xl font-bold">Start Creating</h1>
            <p className="text-gray-600 text-[1rem]">
              Browse our catalog and select the toolsthat fit your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
