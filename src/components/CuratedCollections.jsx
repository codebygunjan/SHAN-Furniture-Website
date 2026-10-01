import React from "react";
import { curatedCollections } from "../assets/curatedCollection";

const CuratedCollections = () => {
  return (
    <div className="sm:ml-10 ml-4 mr-3 sm:mt-5 sm:mr-2 mt-20">
      <h1 className="lg:text-3xl text-[27px] font-instrument word-space">
        Our Curated Collections
      </h1>
      <p className="text-gray-600 py-1 px-2 text-sm sm:text-md">
        Top picked Curated Spaces designes around how you live.
      </p>
      <div className="rounded-t-4xl mt-7 mb-8 flex flex-nowrap gap-6 overflow-x-auto rounded-b-lg relative no-scrollbar">
        <div className="animate-[testimonialMove_9s_linear_infinite] flex gap-5">
          {curatedCollections.map((collection) => {
            return (
              <>
                <div key={collection.id} className="shrink-0">
                  <img
                    className="md:h-70 lg:w-120 h-55 w-80 rounded-t-4xl object-cover bg-center shadow-md rounded-b-lg "
                    src={collection.img}
                  />
                  <h1 className="absolute bottom-10 ml-12.5  whitespace-nowrap text-sm lg:text-[16px] bg-orange-200 rounded-4xl lg:px-7 px-5 py-1 lg:py-1.5 text-black font-medium">
                    {collection.name}
                  </h1>
                </div>
              </>
            );
          })}
          {curatedCollections.map((collection) => {
            return (
              <>
                <div key={collection.id} className="shrink-0">
                  <img
                    className="md:h-70 lg:w-120 h-55 w-80 rounded-t-4xl object-cover bg-center shadow-md rounded-b-lg "
                    src={collection.img}
                  />
                  <h1 className="absolute bottom-10 ml-12.5  whitespace-nowrap text-sm lg: text-[16px] bg-orange-200 rounded-4xl lg:px-7 px-5 py-1 lg:py-1.5 text-black font-medium">
                    {collection.name}
                  </h1>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CuratedCollections;
