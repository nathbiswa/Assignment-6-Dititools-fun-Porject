import React, { useState } from "react";

const DigitalTool = () => {
    const [isSelected, setIsSelected] = useState(true);
  return (
    <div className="container mx-auto py-14">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
        <p className="text-gray-600 mt-4">
          Choose from our curated collection of premium digital products
          designed <br />to boost your productivity and creativity.
        </p>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <button className={`${isSelected === true ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "bg-red-500"} btn rounded-full`}>Products</button>
        <button className={`${isSelected === false ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "bg-red-500"} btn rounded-full`}>Cart</button>
      </div>
    </div>
  );
};

export default DigitalTool;
