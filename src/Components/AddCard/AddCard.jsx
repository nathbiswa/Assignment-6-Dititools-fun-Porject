import React from "react";
import { toast } from "react-toastify";

const AddCard = ({ setAvailableProducts, availableProducts }) => {
//   console.log(availableProducts);
  const totalPrice = availableProducts.reduce((total, product) => total + product.price, 0);
  const paymentSuccess=()=>{
    setAvailableProducts([]);
    toast.success("Payment Successful! Thank you for your purchase.");
  }
  const handelDeletItmes=(productToDelete)=>{
    const deletProduct= availableProducts.filter(product=> product !== productToDelete);
    setAvailableProducts(deletProduct);
        toast.error("Product removed from cart.");
  }
  return (  
    <div className="container mx-auto py-10 shadow-2xl rounded-lg p-6 mt-6">
      <h2 className="text-3xl font-bold">Your Cart</h2>
      <div className="p-3  rounded-md mt-5 space-y-4">
        {availableProducts.map((product, index) => (
          <div key={index}>
            <div className="bg-gray-200 rounded-2xl p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src={product.icon}
                  alt=""
                  className="w-20 p-6 rounded-full bg-gray-400"
                />
                <div className="text-xl font-bold space-y-2">
                  <h1>{product.name}</h1>
                  <span>${product.price}</span>
                </div>
              </div>
              <div>
                <button onClick={()=> handelDeletItmes(product)} className=" cursor-pointer text-red-500 text-2xl">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between  p-2">
        <h2 className="text-3xl font-bold">Total</h2>
        <strong className="text-2xl font-bold">${totalPrice}</strong>
      </div>
      <div className="mt-6">
        <button onClick={()=> paymentSuccess()} className="text-white rounded-full btn bg-gradient-to-r from-blue-500 to-purple-600 btn-block">
            Proceed to Checkout
        </button>

      </div>
    </div>
  );
};

export default AddCard;
