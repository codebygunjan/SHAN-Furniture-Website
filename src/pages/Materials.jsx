import axios from "axios";
import React, { useEffect, useState } from "react";

const Materials = () => {
  const [userData, setUserData] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState("Marble");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const allMaterials = [
    "Oak wood",
    "stone",
    "metal",
    "ply wood",
    "glass",
    "cane",
    "concrete",
    "Marble",
  ];

  const getData = async () => {
    setLoading(true);
    setError(false);
    setUserData([]);

    try {
      let response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${selectedMaterial} interior beautiful furniture Decoration`,
        {
          headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
          },
        },
      );
      console.log(response.data.results);
      setUserData(response.data.results);
      setLoading(false);
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, [selectedMaterial]);

  return (
    <div className="mt-40 lg:mx-5 mx-1 sm:mx-3 mb-10">
      {/* heading info */}
      <div>
        <h1 className="md:text-4xl text-3xl text-gray-700/80 capitalize mx-2">
          The Beauty of Materials
        </h1>
        <p className="my-2 text-gray-500 md:mx-2.5 mx-1 w-155">
          Discover the textures, tones, and natural character behind every SHAN
          piece. Each material tells a story - of nature, craftsmanship and
          timeless design.
        </p>
      </div>

      {/* buttons */}
      <div className="flex gap-3 flex-wrap md:my-5 my-3">
        {allMaterials.map((material) => (
          <button
            key={material}
            className={`capitalize lg:px-5 px-2.5 lg:py-1.5 py-1 rounded-4xl border border-gray-500  font-medium hover:bg-gray-200 cursor-pointer duration-300 ${selectedMaterial === material ? "bg-gray-700 text-gray-100 hover:bg-gray-700 hover:text-gray-100" : "bg-transparent text-gray-700/70"} `}
            onClick={() => {
              setSelectedMaterial(material);
            }}
          >
            {material}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mx-2">
        {loading === true && (
          <div className="flex justify-center items-center col-span-full">
            <h1 className=" text-2xl text-gray-400 capitalize ">Loading...</h1>
          </div>
        )}

        {error === true && (
          <div className="flex justify-center items-center whitespace-nowrap col-span-full">
            <h1 className=" text-2xl text-gray-400 capitalize ">
              Something went wrong. Please try again.
            </h1>
          </div>
        )}

        {userData.map((materialData) => {
          return (
            <div key={materialData.id} className=" rounded-lg bg-gray-200">
              <img
                src={materialData.urls.regular}
                className="h-50 w-full object-cover shadow-xl border border-white"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Materials;
