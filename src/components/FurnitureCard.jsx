import React from "react";

const FurnitureCard = ({ furniture }) => {
  return (
    <div className="rounded-t-3xl rounded-b-3xl shadow-2xl hover:scale-104 duration-400">
      {/* image div */}
      <div>
        <img
          className="h-55 lg:w-80 xl:w-90 xl:h-62 w-85 md:w-65 md:h-57 object-cover bg-center rounded-t-3xl"
          src={furniture.image}
          alt=""
        />
      </div>
      {/* info div */}
      <div className="bg-orange-100/40 inline-block lg:w-80 xl:w-90 w-85 md:w-65 py-4 px-2 rounded-b-3xl">
        <h1 className="font-medium text-lg">{furniture.type}</h1>
        <h2 className="font-medium text-sm">{furniture.name}</h2>
        <div className="flex justify-between">
          <h3 className="text-gray-600 text-sm">{furniture.material}</h3>
          <h4 className="text-sm font-bold text-gray-700 bg-orange-200/30 px-1">
            ₹ {furniture.price}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCard;
