import { Heart, Trash, MoveRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || [],
  );

  const removeFurniture = (furniture) => {
    let remove = wishlist.filter((item) => item.id !== furniture.id);
    setWishlist(remove);
    localStorage.setItem("wishlist", JSON.stringify(remove));
  };
  return (
    <div className="mt-30 bg-gray-300/20 min-h-screen overflow-y-hidden">
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6 gap-3 items-start p-4 lg:px-10">
        {wishlist.map((furnitureCard) => {
          return (
            <div
              key={furnitureCard.id}
              className="border border-gray-300/70 p-2 rounded-md bg-white shadow-md"
            >
              <div className="relative">
                <img
                  className="h-55 w-full object-cover bg-center"
                  src={furnitureCard.image}
                  alt={furnitureCard.name}
                />
              </div>
              <div className="pt-2 px-3">
                <h1 className="text-lg text-gray-800/90 font-medium">
                  {furnitureCard.name}
                </h1>
                <div className="flex gap-4 text-sm text-gray-700/80 pt-1 pb-2 ">
                  <p>{furnitureCard.type}</p>
                  <p>• {furnitureCard.material}</p>
                </div>
                <h3 className="p-1.5 bg-amber-100/30 text-black inline rounded-lg">
                  ₹ {furnitureCard.price}
                </h3>
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      removeFurniture(furnitureCard);
                    }}
                    className="flex w-full gap-2 items-center hover:text-red-900 justify-center text-gray-500 cursor-pointer border border-gray-300  p-1.5 mx-2.5 my-2 mt-3  rounded-3xl hover:bg-gray-100 duration-200 active:scale-97"
                  >
                    <Trash size={16} color="gray" /> Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {wishlist.length === 0 && (
        <div className="text-center py-2">
          <h1 className="md:text-3xl text-2xl font-medium text-gray-500/80 word-space">
            Your Wishlist is Empty
          </h1>
          <p className="text-gray-500 py-2 px-2 text-sm">
            Save your favourite furniture pieces here and come back to them
            anytime.
          </p>
          <button
            onClick={() => {
              navigate("/collections");
            }}
            className="flex mx-auto gap-2 border border-gray-400 p-1 rounded-2xl px-3 m-3  bg-orange-200 hover:bg-orange-300 duration-400 active:scale-96 font-medium text-gray-600 outline-none"
          >
            Explore Collection <MoveRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
