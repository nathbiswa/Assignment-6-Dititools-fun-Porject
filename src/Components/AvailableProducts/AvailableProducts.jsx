import React from "react";

const AvailableProducts = ({ Products }) => {
  console.log(Products);
  return (
    <div className="conatainer mx-auto grid md:grid-cols-3 gap-3 py-10">
      {Products.map((product) => {
        return (
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

                <div className="flex justify-between">
                  <h2 className="text-2xl font-bold">{product.name}</h2>
                  <span className="text-xl">
                    ${product.price}/{product.period}
                  </span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>High-resolution image generation</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Customizable style templates</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Batch processing capabilities</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>AI-driven image enhancements</span>
                  </li>
                  <li className="opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-base-content/50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="line-through">
                      Seamless cloud integration
                    </span>
                  </li>
                  <li className="opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-base-content/50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="line-through">
                      Real-time collaboration tools
                    </span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="text-white rounded-full btn bg-gradient-to-r from-blue-500 to-purple-600 btn-block">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailableProducts;
