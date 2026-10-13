import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CollectionPage from "./pages/CollectionPage";
import Wishlist from "./components/Wishlist";
import Spaces from "./pages/Spaces";
import Materials from "./pages/Materials";
import CartPage from "./pages/CartPage";
import ScrollToTop from "./components/ScrollToTop";
import { ThemContext } from "./context/ThemeToggle";

const App = () => {
  const { theme } = useContext(ThemContext);
  return (
    <div
      className={
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }
    >
      <Navbar />
      <ScrollToTop />
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<CollectionPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
