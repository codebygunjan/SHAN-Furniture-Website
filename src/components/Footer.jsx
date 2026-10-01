import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-500/10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
          <div>
            <img className="w-50" src={logo} alt="dummyLogoColored" />
            <p className="max-w-102.5 mt-6 text-sm">
              Furniture and spaces designed for calm, comfort, and everyday
              living.Thoughtful furniture for slower spaces. Designed with
              intention, made to belong.
            </p>
          </div>
          <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
            <div>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                Shop
              </h3>
              <ul className="text-sm space-y-1">
                <li>
                  <button
                    onClick={() => {
                      navigate("/");
                    }}
                    className="hover:underline transition"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/collections");
                    }}
                    className="hover:underline transition"
                  >
                    Collection
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/wishlist");
                    }}
                    className="hover:underline transition"
                  >
                    wishlist
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/cart");
                    }}
                    className="hover:underline transition"
                  >
                    cart
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                Explore
              </h3>
              <ul className="text-sm space-y-1">
                <li>
                  <button
                    onClick={() => {
                      navigate("/spaces");
                    }}
                    className="hover:underline transition"
                  >
                    Spaces
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/materials");
                    }}
                    className="hover:underline transition"
                  >
                    Materials
                  </button>
                </li>
                <li>
                  <button className="hover:underline transition">
                    About SHAN
                  </button>
                </li>
                <li>
                  <button className="hover:underline transition">
                    Contact
                  </button>
                </li>
                <li>
                  <button className="hover:underline transition">FAQs</button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                Connect
              </h3>
              <ul className="text-sm space-y-1">
                <li>
                  <button className="hover:underline transition">
                    Instagram
                  </button>
                </li>
                <li>
                  <button className="hover:underline transition">
                    Twitter
                  </button>
                </li>
                <li>
                  <button className="hover:underline transition">
                    Facebook
                  </button>
                </li>
                <li>
                  <button className="hover:underline transition">Email</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
          Copyright 2026 © SHAN All Right Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
