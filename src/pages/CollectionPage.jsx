import { useState } from "react";
import { featuredFurniture } from "../assets/featuredFurniture";
import collection from "../assets/collection.png";
import { Heart, ShoppingCart } from "lucide-react";

const CollectionPage = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedMaterial, setSelectedMaterial] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");

  const allTypes = [
    "All",
    "Table",
    "Chair",
    "Wardrobe",
    "TV Console",
    "Bookshelf",
    "Floor Lamp",
    "Accent Vase",
  ];

  const allMaterials = [
    "All",
    "Oak",
    "Walnut",
    "Wood",
    "Linen",
    "Glass",
    "Metal",
  ];

  const allPrices = [
    "All",
    "Under ₹15,000",
    "₹15,000 – ₹30,000",
    "₹30,000 – ₹45,000",
    "Above ₹45,000",
  ];

  const allOptions = ["All", "High to Low", "Low to High"];
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || [],
  );

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  const addToWishlist = (furnitureCard) => {
    let alreadyAdded = wishlist.some((item) => item.id === furnitureCard.id);
    if (alreadyAdded) {
      // heart removing and keeping back into card
      let removeHeart = wishlist.filter((item) => item.id !== furnitureCard.id);
      setWishlist(removeHeart);
      return;
    }
    const storedFurniture = [...wishlist, furnitureCard];
    setWishlist(storedFurniture);
    localStorage.setItem("wishlist", JSON.stringify(storedFurniture));
  };

  const addToCart = (selectedCard) => {
    let alreadyAdded = cart.some((item) => item.id === selectedCard.id);
    if (alreadyAdded) return;
    console.log("selectedCard", selectedCard);

    const quantity = { ...selectedCard, quantity: 1 };

    const updatedCard = [...cart, quantity];

    setCart(updatedCard);
    console.log("quantity", quantity);
    console.log("updatedCard", updatedCard);

    localStorage.setItem("cart", JSON.stringify(updatedCard));
  };

  const filteredByTypes =
    selectedType === "All"
      ? featuredFurniture
      : featuredFurniture.filter((furnitureCard) => {
          return furnitureCard.type.includes(selectedType);
        });

  const filteredByMaterial =
    selectedMaterial === "All"
      ? filteredByTypes
      : filteredByTypes.filter((materialCard) => {
          return materialCard.material.includes(selectedMaterial);
        });

  const filteredByPrice =
    selectedPrice === "All"
      ? filteredByMaterial
      : filteredByMaterial.filter((furnitureCard) => {
          if (selectedPrice === "Under ₹15,000") {
            return furnitureCard.price < 15000;
          } else if (selectedPrice === "₹15,000 – ₹30,000") {
            return furnitureCard.price >= 15000 && furnitureCard.price <= 30000;
          } else if (selectedPrice === "₹30,000 – ₹45,000") {
            return furnitureCard.price > 30000 && furnitureCard.price <= 45000;
          } else if (selectedPrice === "Above ₹45,000") {
            return furnitureCard.price > 45000;
          } else {
            return;
          }
        });

  const filteredBySorting =
    selectedOption === "All"
      ? filteredByMaterial
      : filteredByMaterial.sort((a, b) => {
          if (selectedOption === "Low to High") {
            return a.price - b.price;
          } else if (selectedOption === "High to Low") {
            return b.price - a.price;
          }
        });

  return (
    <div className="mt-24">
      {/* hero section */}
      <div
        className="h-59 w-full bg-center bg-cover no-repeat md:pt-8 pt-4"
        style={{
          backgroundImage: `url(${collection})`,
        }}
      >
        <p className="px-5 md:pl-10 pl-6 text-gray-800/90 text-sm">
          Our Collection
        </p>
        <h1 className="md:text-[40px] text-2xl text-gray-700 px-5 md:py-2">
          Furniture for Every Space
        </h1>
        <p className="px-5 md:pl-10 pl-6 text-gray-800/90 text-sm w-90">
          Discover timeless pieces designed for comfort style and everyday
          living.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between lg:px-5 py-5 mr-10">
        {/* filter section */}

        <div className="bg-gray-300/30 w-full lg:w-[25%] p-4 mt-5 mx-5">
          <div className="flex justify-between p-2 font-medium text-gray-700 text-[20px] border-b border-gray-300 mb-2">
            <p className="px-1.5 py-1">
              <button
                onClick={() => {
                  setShowFilters(!showFilters);
                }}
                className="lg:hidden block active:bg-gray-500 duration-300 active:scale-95 hover:bg-gray-400 p-1 rounded"
              >
                {showFilters ? "Hide Filters" : "Show Filters"}
              </button>
              <span className="lg:block hidden text-gray-400">Filters</span>
            </p>
            <button
              onClick={() => {
                setSelectedMaterial("All");
                setSelectedType("All");
                setSelectedPrice("All");
                setSelectedOption("All");
              }}
              className="text-gray-500 rounded-md hover:bg-gray-300 px-1.5 py-1 text-md active:scale-95"
            >
              Clear
            </button>
          </div>
          {/* actual filters */}
          <div className={`${showFilters ? "block" : "hidden"} md:block`}>
            {/* type div */}
            <div>
              <h1 className="text-gray-100 rounded text-lg bg-gray-500/95 px-2 my-4 py-1">
                Types
              </h1>
              <div className="mt-2 text-gray-400 text-[12px] lg:text-[15px] flex flex-col items-start lg:gap-0.5">
                {allTypes.map((type) => (
                  <button
                    key={type}
                    className={`outline-none hover:bg-gray-300 hover:shadow-md w-full flex items-start py-0.5 lg:py-1 rounded-lg px-2 active:bg-gray-400 duration-400 hover:pl-20 ${selectedType === type ? "bg-white hover:bg-gray-300/70 shadow-md text-gray-800" : ""}`}
                    onClick={() => {
                      setSelectedType(type);
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            {/* material div */}
            <div>
              <h1 className="text-gray-100 rounded text-lg bg-gray-500/95 px-2 my-4 py-1">
                Materials
              </h1>
              <div className="mt-2 text-gray-400 text-[12px] lg:text-[15px] flex flex-col items-start lg:gap-0.5">
                {allMaterials.map((material) => (
                  <button
                    key={material}
                    onClick={() => {
                      setSelectedMaterial(material);
                    }}
                    className={`outline-none hover:bg-gray-300 hover:shadow-md w-full flex items-start py-0.5 lg:py-1 rounded-lg px-2 active:bg-gray-400 duration-400 hover:pl-20 ${selectedMaterial === material ? "bg-white hover:bg-gray-300/70 shadow-md text-gray-800" : ""}`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>
            {/* price div */}
            <div>
              <h1 className="text-gray-100 rounded text-lg bg-gray-500/95 px-2 my-4 py-1">
                Prices
              </h1>
              <div className="mt-2 text-gray-400 text-[12px] lg:text-[15px] flex flex-col items-start lg:gap-0.5">
                {allPrices.map((price) => (
                  <button
                    key={price}
                    onClick={() => {
                      setSelectedPrice(price);
                    }}
                    className={`outline-none hover:shadow-md hover:bg-gray-300 w-full flex items-start py-0.5 lg:py-1 my-0.5 rounded-lg px-2 active:bg-gray-400 duration-400 hover:pl-20 ${selectedPrice === price ? "bg-white hover:bg-white shadow-md text-gray-800" : ""}`}
                  >
                    {price}
                  </button>
                ))}
              </div>
            </div>
            {/* sort Options */}
            <div>
              <h1 className="text-gray-100 rounded text-lg bg-gray-500/95 px-2 my-4 py-1">
                Prices
              </h1>
              <div className="mt-2 text-gray-400 text-[12px] lg:text-[15px] flex flex-col items-start lg:gap-0.5">
                {allOptions.map((sort) => (
                  <button
                    key={sort}
                    className={`outline-none hover:shadow-md hover:bg-gray-300 w-full flex items-start py-0.5 lg:py-1 my-0.5 rounded-lg px-2 active:bg-gray-400 duration-400 hover:pl-20 ${selectedOption === sort ? "bg-white hover:bg-white shadow-md text-gray-800" : ""}`}
                    onClick={() => {
                      setSelectedOption(sort);
                    }}
                  >
                    {sort}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* cards section */}
        <div className="w-full lg:w-[75%] grid md:gap-4 lg:grid-cols-3 lg:gap-6 gap-3 items-start p-4">
          {filteredByPrice.length === 0 && (
            <div className="flex flex-col justify-center items-center col-span-full ">
              <h1 className="md:text-4xl text-2xl font-semibold text-gray-600 md:text-gray-600/80 lg:pt-20 pt-10 lg:pb-7 pb-4">
                No Results Found
              </h1>
              <p className="text-gray-600 md:text-gray-500 md:text-[19px] text-sm">
                No furniture matches your selected filters.
              </p>
              <p className="text-gray-600 md:text-gray-500 md:text-[19px] text-sm">
                Try changing or clearing your filters.
              </p>
            </div>
          )}
          {filteredByPrice.map((card) => {
            const isWishlist = wishlist.some((item) => item.id === card.id);
            const alreadyAdded = cart.some((item) => item.id === card.id);

            return (
              <div
                key={card.id}
                className="p-2 bg-white shadow-md rounded-md sm:ml-0 ml-6"
              >
                <div className="relative">
                  <img
                    className="sm:h-55 h-45 w-full object-cover bg-center"
                    src={card.image}
                    alt=""
                  />
                  <button
                    onClick={() => addToWishlist(card)}
                    className="absolute outline-none top-5 right-5 cursor-pointer p-1.5 rounded-full bg-white"
                  >
                    <Heart
                      size={17}
                      fill={isWishlist ? "red" : "white"}
                      color={isWishlist ? "red" : "black"}
                    />
                  </button>
                </div>
                <div className="sm:pt-2 sm:px-3 pt-1">
                  <h1 className="text-lg text-gray-800/90 font-medium">
                    {card.name}
                  </h1>
                  <div className="flex gap-4 text-sm text-gray-700/80 pt-1 pb-2 ">
                    <p>{card.type}</p>
                    <p>• {card.material}</p>
                  </div>
                  <h3 className="p-1.5 bg-amber-100/30 text-black inline rounded-lg">
                    ₹ {card.price}
                  </h3>

                  <button
                    disabled={alreadyAdded}
                    onClick={() => addToCart(card)}
                    className={`flex gap-2 items-center justify-center text-gray-600 cursor-pointer w-[70%] sm:mt-5 border mx-auto border-gray-400 p-1.5 my-2 rounded-3xl duration-200 ${alreadyAdded ? "bg-purple-800 text-white" : "bg-transparent hover:bg-gray-200 active:scale-97"} `}
                  >
                    <ShoppingCart
                      size={alreadyAdded ? 0 : 16}
                      color={alreadyAdded ? "white" : "gray"}
                    />
                    {alreadyAdded ? "Added to cart" : "add to cart"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
