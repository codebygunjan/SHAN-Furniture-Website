import React from "react";
import { featuredFurniture } from "../assets/featuredFurniture";
import FurnitureCard from "./FurnitureCard";
import { useNavigate } from "react-router-dom";

const FeaturedCollections = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-4 md:my-20 mt-20">
      {/* title */}
      <div className="flex items-center lg:ml-5 mt-5 justify-between pb-7">
        <h1 className="lg:text-3xl text-[26px] font-instrument word-space">
          Featured Furniture Interior Styles
        </h1>
        <button
          onClick={() => {
            navigate("/collections");
          }}
          className="bg-black cursor-pointer hover:bg-gray-600 active:scale-95 duration-200 text-white py-2 rounded-md lg:px-10 px-6 lg:text-lg text-sm whitespace-nowrap ml-3"
        >
          View All
        </button>
      </div>

      {/* furnitures */}
      <div className="flex flex-wrap gap-10 mb-15 lg:gap-7 md:gap-3 lg:ml-5 xl:ml-8 xl:gap-12 mt-5">
        {featuredFurniture.slice(0, 4).map((furniture, index) => {
          return (
            <div
              key={furniture.id}
              className={
                index === 1
                  ? "hidden sm:block"
                  : index === 2
                    ? "hidden md:block"
                    : index === 3
                      ? "hidden xl:block"
                      : ""
              }
            >
              <FurnitureCard furniture={furniture} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedCollections;
