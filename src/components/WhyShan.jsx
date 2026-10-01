import { Clock, Layers, Leaf } from "lucide-react";
import React from "react";

const WhyShan = () => {
  return (
    <div className="border-t border-b border-gray-300/60 lg:mx-10 mx-2 lg:py-10 py-7">
      <div className="md:w-120 flex flex-col lg:gap-7 gap-4 justify-center items-center mx-auto text-center">
        <h1 className="lg:text-4xl text-2xl font-medium word-space">
          Thoughtfully made for slower spaces.
        </h1>
        <h3 className="text-gray-600">
          Furniture designed to bring calm, comfort and timeless character into
          your home.
        </h3>
      </div>
      {/* 2nd div */}
      <div className="flex md:flex-row flex-col justify-center gap-5 lg:gap-20 lg:mt-15 mt-10">
        <div className="md:w-50 text-center flex md:flex-col items-center md:gap-3 gap-2">
          <p className="lg:p-3.5 p-2 bg-gray-300/50 rounded-full">
            <Leaf />
          </p>
          <h1 className="lg:text-lg  font-medium text-gray-700">
            Thoughtful Design
          </h1>
          <p className="text-gray-700 text-sm lg:text-medium">
            Carefully considered proportions and details
          </p>
        </div>
        <div className="md:w-50  text-center flex md:flex-col items-center md:gap-3 gap-2">
          <p className="lg:p-3.5 p-2 bg-gray-300/50 rounded-full">
            <Layers />
          </p>
          <h1 className="lg:text-lg font-medium text-gray-700">
            Quality Materials
          </h1>
          <p className="text-gray-700 text-sm lg:text-medium">
            Selected materials made for everyday living
          </p>
        </div>
        <div className="md:w-50  text-center flex md:flex-col items-center md:gap-3 gap-2">
          <p className="lg:p-3.5 p-2 bg-gray-300/50 rounded-full">
            <Clock />
          </p>
          <h1 className="lg:text-lg font-medium text-gray-700">
            Timeless Forms
          </h1>
          <p className="text-gray-700 text-sm lg:text-medium">
            Simple designs created to stay beautiful over time
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyShan;
