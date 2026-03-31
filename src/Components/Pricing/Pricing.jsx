import React from "react";
import { IoIosCheckmark } from "react-icons/io";

const Pricing = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center p-10 space-y-3">
        <h1 className="text-[20px] lg:text-5xl font-bold">Simple, Transparent Pricing</h1>
        <p className="font-semibold text-[1rem] text-gray-400">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
        <div className="shadow-2xs rounded-lg border border-gray-200 p-6 w-full space-y-2 bg-[#F2F2F2]">
          <div className="my-6">
            <h2 className="text-3xl font-bold">Starter</h2>
            <p className="text-[1rem] text-gray-500">
              Perfect for getting started
            </p>
          </div>

          <div className="my-3 font-bold">
            <span className="text-3xl font-bold">$0 </span>/month
          </div>
          <ul>
            <li className="flex items-center gap-1">
              <IoIosCheckmark className="text-green-500 font-bold text-2xl" />{" "}
              Access to 10 free tools
            </li>
            <li className="flex items-center gap-1">
              <IoIosCheckmark className="text-green-500 font-bold text-2xl" />{" "}
              Basic templates
            </li>
            <li className="flex items-center gap-1">
              <IoIosCheckmark className="text-green-500 font-bold text-2xl" />{" "}
              Community support
            </li>
            <li className="flex items-center gap-1">
              <IoIosCheckmark className="text-green-500 font-bold text-2xl" /> 1
              project per month
            </li>
          </ul>
          <button
            className="w-full bg-gradient-to-r from-blue-400 to-purple-600 text-white py-2 rounded-full 
          mt-6 hover:bg-blue-600 transition duration-300"
          >
            Get Started Free
          </button>
        </div>
        <div
          className="shadow-2xs rounded-lg border border-gray-200 p-6 w-full space-y-2 
        bg-gradient-to-r from-blue-400 to-purple-600 text-white"
        >
          <div className="my-6">
            <h2 className="text-3xl font-bold">Pro</h2>
            <p className="text-[1rem] text-white">Best for professionals</p>
          </div>

          <div className="my-3 font-bold">
            <span className="text-3xl font-bold">$90 </span>/month
          </div>
          <ul>
            <li className="flex items-center gap-1">
              <IoIosCheckmark className="text-white font-bold text-2xl" />
              Access to all premium tools
            </li>
            <li className="flex items-center gap-1">
              <IoIosCheckmark className="text-white font-bold text-2xl" />
             Unlimited templates
            </li>
            <li className="flex items-center gap-1">
              <IoIosCheckmark className="text-white font-bold text-2xl" />
              Priority support
            </li>
            <li className="flex items-center gap-1">
              <IoIosCheckmark className="text-white font-bold text-2xl" /> 
              Unlimited projects
            </li>
            <li className="flex items-center gap-1">
              <IoIosCheckmark className="text-white font-bold text-2xl" /> 
              Cloud sync
            </li>
            <li className="flex items-center gap-1">
              <IoIosCheckmark className="text-white font-bold text-2xl" /> 
            Advanced analytics
            </li>
          </ul>
          <button className="bg-white w-full flex items-center justify-center rounded-full mt-6 py-2">
            <div
            className="w-full bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent rounded-full  
           "
          >
           Start Pro Trial
          </div> 
          </button>
         
        </div>
        <div className="shadow-2xs rounded-lg border border-gray-200 p-6 w-full space-y-2 bg-[#F2F2F2]">
          <div className="my-6">
            <h2 className="text-3xl font-bold">Enterprise</h2>
            <p className="text-[1rem] text-gray-500">
              For teams and businesses
            </p>
          </div>

          <div className="my-3 font-bold">
            <span className="text-3xl font-bold">$99 </span>/month
          </div>
          <ul>
            <li className="flex items-center gap-1">
              <IoIosCheckmark className="text-green-500 font-bold text-2xl" />
             Everything in Pro
            </li>
            <li className="flex items-center gap-1">
              <IoIosCheckmark className="text-green-500 font-bold text-2xl" />
              Team collaboration
            </li>
            <li className="flex items-center gap-1">
              <IoIosCheckmark className="text-green-500 font-bold text-2xl" />
            Custom integrations
            </li>
            <li className="flex items-center gap-1">
              <IoIosCheckmark className="text-green-500 font-bold text-2xl" /> 
             Dedicated support
            </li>
            <li className="flex items-center gap-1">
              <IoIosCheckmark className="text-green-500 font-bold text-2xl" /> 
             SLA guarantee
            </li>
            <li className="flex items-center gap-1">
              <IoIosCheckmark className="text-green-500 font-bold text-2xl" /> 
             Custom branding
            </li>
          </ul>
          <button
            className="w-full bg-gradient-to-r from-blue-400 to-purple-600 text-white py-2 rounded-full 
          mt-6 hover:bg-blue-600 transition duration-300"
          >
           Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
