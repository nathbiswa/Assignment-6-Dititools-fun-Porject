import React from "react";

const Card = ({ product, setAvailableProducts, availableProducts }) => {


  const handleSelectedProduct=()=>{
    const newProduct= [...availableProducts, product];
    setAvailableProducts(newProduct);
  }
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-sm">
          <div className="card-body ">
            <div className="flex items-center justify-between relative gap-2 mb-8">
              <div>
                <div className="icon">
                  <img
                    src={product.icon}
                    alt=""
                    className="p-4 bg-gray-400 rounded-full"
                  />
                </div>
              </div>
              <span
                className={`absolute -top-[20px] -right-[10px] p-4 rounded-full text-[1rem]  badge badge-xs ${
                  product.tag === "popular"
                    ? "bg-[#E1E7FF] text-[#4F39F6]"
                    : product.tag === "best seller"
                      ? " bg-[#FEF3C6] text-[#BB4D00]"
                      : product.tag === "new"
                        ? "bg-[#E0F8F2] text-[#007A5B]"
                        : ""
                } `}
              >
                {product.tag}
              </span>
            </div>

            <div className="">
              <h2 className="text-2xl font-bold">{product.name}</h2>
            </div>
            <div>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
            <div>
              <span>
                <span className="text-xl font-bold">${product.price}</span> /
                {product.period}
              </span>
            </div>
            <ul className="mt-2 flex flex-col gap-2 text-xs">
              {product.features.map((feature, ind) => {
                return (
                  <div key={ind}>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  </div>
                );
              })}
            </ul>
            <div className="mt-6">
              <button onClick={()=> handleSelectedProduct()} className="text-white rounded-full btn bg-gradient-to-r from-blue-500 to-purple-600 btn-block">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
