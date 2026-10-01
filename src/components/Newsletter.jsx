import React from "react";
import newsletter from "../assets/newsletter.png";

const Newsletter = () => {
  return (
    <div>
      <div
        className="md:h-100 h-80 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${newsletter})` }}
      >
        <div className="flex flex-col items-center md:pt-10 pt-6">
          <h1 className="text-gray-900/80 md:text-3xl text-xl font-medium">
            SHAN
          </h1>
          <p className="text-gray-600 md:text-lg text-sm font-medium">
            FURNITURE • SPACES • YOU
          </p>
        </div>

        <div className="flex flex-col items-center lg:pt-10 pt-4">
          <h1 className="text-gray-900/90 lg:text-[50px] text-3xl font-bold font-cormorant">
            Stay Close to SHAN
          </h1>
          <p className="md:text-gray-600 text-gray-900 text-sm px-2 font-medium w-110 text-center md:pt-2">
            Receive new collection updates, thoughtful interiors, and pieces
            worth making space for.
          </p>
        </div>

        {/* Input + Button */}
        <div className="flex justify-center mt-6">
          <div className="relative w-100">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full border border-gray-800 bg-gray-900 text-gray-100 rounded-full py-3 px-5 pr-24 outline-none"
            />
            <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-gray-700 transition border-gray-700 border">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
