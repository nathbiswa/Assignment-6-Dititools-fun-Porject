import React, { use, useState } from "react";
import AvailableProducts from "../AvailableProducts/AvailableProducts";
import AddCard from "../AddCard/AddCard";

const DigitalTool = ({
  dataPromise,
  setAvailableProducts,
  availableProducts,
}) => {
  const [isSelected, setIsSelected] = useState("products");
  const Products = use(dataPromise);
  // console.log(Products);
  return (
    <div className="container mx-auto py-14">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
        <p className="text-gray-600 mt-4">
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setIsSelected("products")}
          className={`${isSelected === "products" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : ""} btn rounded-full`}
        >
          Products
        </button>
        <button
          onClick={() => setIsSelected("addtocart")}
          className={`${isSelected === "addtocart" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : ""} btn rounded-full`}
        >
          Cart({availableProducts.length})
        </button>
      </div>
      <div>
        {isSelected === "products" && (
          <AvailableProducts
            Products={Products}
            setAvailableProducts={setAvailableProducts}
            availableProducts={availableProducts}
          />
        )}
        {isSelected === "addtocart" && <AddCard setAvailableProducts={setAvailableProducts} availableProducts={availableProducts} />}
      </div>
    </div>
  );
};

export default DigitalTool;
