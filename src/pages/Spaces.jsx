import axios from "axios";
import React, { useEffect, useState } from "react";

const Spaces = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState("Living Room");
  const allButtons = [
    "Living Room",
    "Bedroom",
    "Dining Place",
    "Quite WorkPlace",
  ];

  const getData = async () => {
    setLoading(true);
    setError(false);
    setUserData([]);
    try {
      let response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${selectedPlace}furniture`,
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
  }, [selectedPlace]);

  // getData();
  return (
    <div className="mt-40 lg:mx-5 mx-1 sm:mx-3">
      <h1 className="md:text-4xl text-3xl text-gray-700/80 capitalize mx-2">
        explore beautiful spaces
      </h1>
      <p className="my-2 text-gray-500 md:mx-2.5 mx-1 w-155">
        Discover inspiration for every corner of your home. from cozy living
        rooms to peaceful place, find perfect space for your style.
      </p>

      <div className="flex gap-3 flex-wrap md:my-5 my-3">
        {allButtons.map((button) => (
          <button
            key={button}
            onClick={() => {
              setSelectedPlace(button);
            }}
            className={`capitalize lg:px-4 px-2 lg:py-1.5 py-1 rounded-4xl border border-gray-500  font-medium hover:bg-gray-200 cursor-pointer duration-300  ${selectedPlace === button ? "bg-gray-700 text-gray-100 hover:bg-gray-700 hover:text-gray-100" : "bg-transparent text-gray-700/70"}`}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="mt-10 relative mb-20 grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-5 ">
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

        {userData.map((photoData) => {
          return (
            <div key={photoData.id}>
              <div className="rounded-lg bg-gray-200 mx-3">
                <img
                  className="h-70 w-full object-cover rounded-lg shadow-2xl border border-white"
                  src={photoData.urls.regular}
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Spaces;
