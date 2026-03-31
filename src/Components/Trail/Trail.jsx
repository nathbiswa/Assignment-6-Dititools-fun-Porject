import React from "react";

const Trail = () => {
  return (
    <div className="bg-gradient-to-r to-blue-500 from-purple-500  py-16">
      <div className="container mx-auto py-10">
        <div className="text-center text-white">
          <h1 className="text-[20px] lg:text-5xl font-bold">
            Ready to Transform Your Workflow?
          </h1>
          <p className="text-[14px] lg:text-lg mt-4 text-gray-400">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br />
            Start your free trial today.
          </p>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
            <button className="btn bg-white rounded-full">Explore Products</button>
            <button className="btn btn-outline rounded-full text-white border-purple-500">View Pricing</button>
        </div>
      </div>
    </div>
  );
};

export default Trail;
