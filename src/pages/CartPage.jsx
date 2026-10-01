import { Minus, MoveRight, Plus, Trash } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  const total = cart.reduce((accumulator, curentItem) => {
    return accumulator + curentItem.price * curentItem.quantity;
  }, 0);

  return (
    <div className="mt-27 bg-gray-300/60 min-h-screen flex lg:flex-row flex-col-reverse gap-1 relative pb-20 border-b border-gray-300">
      {cart.length === 0 && (
        <div className="text-center py-2 w-100 flex flex-col items-center mx-auto h-auto self-start absolute top-10 left-1/2 -translate-x-1/2">
          <h1 className="md:text-3xl text-2xl font-medium text-gray-700/80 word-space">
            Your Cart is Empty
          </h1>
          <p className="text-gray-500 py-2 px-2 text-sm">
            add your handpicked furniture to the cart
          </p>
          <button
            onClick={() => {
              navigate("/collections");
            }}
            className="flex mx-auto gap-2 border border-gray-400 p-1 rounded-2xl px-3 m-3 bg-orange-200 hover:bg-orange-300 duration-400 active:scale-96 font-medium text-gray-600 outline-none"
          >
            Explore Collection <MoveRight />
          </button>
        </div>
      )}
      <div className="pt-10 w-full flex flex-col gap-1">
        {cart.map((card) => {
          return (
            <div
              key={card.id}
              className="bg-gray-50 flex sm:flex-row flex-col sm:gap-10 p-3 md:mx-10 mx-5 rounded"
            >
              <div className="h-57 md:w-65">
                <img src={card.image} className="h-full w-full object-cover" />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl text-gray-800 font-medium">
                  {card.name}
                </h1>
                <div className="flex gap-4 text-gray-600/70 sm:mt-2 mt-1">
                  <p>{card.type}</p>|<p>{card.material}</p>
                </div>
                <div className="flex items-center lg:my-4 my-3 md:gap-5 gap-3 w-50">
                  <p className="md:text-xl text-lg text-gray-600 font-semibold whitespace-nowrap">
                    ₹ {card.price}
                  </p>
                  <div className="flex gap-2 border rounded-lg border-gray-400 text-gray-500">
                    <div className="border-r-2 pr-1.5 border-gray-400/30">
                      <button
                        onClick={() => {
                          const updatedCart = cart.map((item) => {
                            if (item.id === card.id) {
                              return {
                                ...item,
                                quantity: item.quantity + 1,
                              };
                            }
                            return item;
                          });
                          setCart(updatedCart);
                          localStorage.setItem(
                            "cart",
                            JSON.stringify(updatedCart),
                          );
                        }}
                        className="hover:bg-gray-300/40 sm:my-1 p-1 rounded-lg active:bg-gray-300 my-0.5 px-3"
                      >
                        <Plus size={15} />
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        const updatedCart = cart.map((item) => {
                          if (item.id === card.id) {
                            if (item.quantity > 1) {
                              return {
                                ...item,
                                quantity: item.quantity - 1,
                              };
                            }
                          }
                          return item;
                        });
                        setCart(updatedCart);

                        localStorage.setItem(
                          "cart",
                          JSON.stringify(updatedCart),
                        );
                      }}
                      className="hover:bg-gray-300/40 sm:my-1 p-1 rounded-lg active:bg-gray-300 my-0.5 px-3"
                    >
                      <Minus size={15} />
                    </button>
                  </div>
                </div>

                <div className="flex gap-10 justify-between sm:justify-center w-50">
                  <p className="mt-2 pt-1 inline-block mx-auto font-medium text-gray-600 whitespace-nowrap border-t border-gray-200">
                    Quantity: {card.quantity}
                  </p>

                  <button
                    onClick={() => {
                      let remove = cart.filter((item) => item.id !== card.id);
                      localStorage.setItem("cart", JSON.stringify(remove));
                      setCart(remove);
                    }}
                    className="flex items-center gap-2 border mx-auto active:scale-95 duration-100 cursor-pointer rounded px-2 text-red-600 text-sm py-1 mt-2.5"
                  >
                    <Trash size={17} color="red" /> remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {cart.length >= 1 && (
        <div className="pt-10 mt-10 lg:w-[40%] sm:mx-15 mx-5 bg-white min-h-80 self-start">
          <div className="sm:px-10 px-5">
            <h1 className="text-3xl whitespace-nowrap px-5 capitalize pb-2.5 border-b border-gray-300">
              order summary
            </h1>
            <div className="mt-7 text-gray-600">
              <p className="pb-3 text-gray-700 text-xl font-medium">
                Total Furniture
              </p>
              <div className="flex flex-col">
                {cart.map((card) => {
                  return (
                    <div className="flex justify-between py-1">
                      <p>
                        {card.name} ({card.quantity})
                      </p>
                      <p>{card.price}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-between py-4 text-gray-600/60">
              <p>Shipping</p>
              <p>free</p>
            </div>
            <div className="text-2xl whitespace-nowrap capitalize pb-2.5 border-t border-gray-300 flex justify-between pt-4 font-medium text-gray-800">
              <h1>Total</h1>
              <h1>₹ {total}</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
