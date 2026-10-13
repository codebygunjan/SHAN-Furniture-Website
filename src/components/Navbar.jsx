import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { UserButton, useClerk, useUser } from "@clerk/react";
import { Heart, Moon, ShoppingCart, Sun } from "lucide-react";
import { ThemContext } from "../context/ThemeToggle";
const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "Spaces", path: "/spaces" },
    { name: "Materials", path: "/materials" },
  ];

  const { theme, setTheme } = useContext(ThemContext);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { openSignIn } = useClerk();
  const { user } = useUser();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 text-gray-900 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}
    >
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="shan logo" className="w-49 h-auto" />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            className={({ isActive }) => {
              return isActive
                ? "group  flex flex-col gap-0.5 border-b-2 border-gray-900 text-black"
                : `group  flex flex-col gap-0.5 border-b-2 border-transparent ${isScrolled ? "text-gray-700" : "text-gray-900"}`;
            }}
          >
            {link.name}
            <div
              className={`${isScrolled ? "bg-gray-700" : "bg-black"}  h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </NavLink>
        ))}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center lg:gap-4 md:gap-2 md:px-3">
        <div className="flex gap-7">
          <button
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
          <NavLink
            to="/wishlist"
            className={({ isActive }) => {
              return isActive
                ? "p-2 rounded-full bg-gray-200"
                : "p-2 rounded-full bg-transparent";
            }}
          >
            <Heart size={19} color="#5D6570" strokeWidth={2.3} />
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => {
              return isActive
                ? "p-2 rounded-full bg-gray-200"
                : "p-2 rounded-full bg-transparent";
            }}
          >
            <ShoppingCart size={19} color="#5D6570" strokeWidth={2.3} />
          </NavLink>
        </div>
        {user ? (
          <UserButton></UserButton>
        ) : (
          <button
            onClick={openSignIn}
            className={`px-7 py-2 text-[13px] rounded-full ml-5 hover:bg-gray-500 cursor-pointer  transition-all duration-300 bg-black text-white `}
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-7 md:hidden">
        <div className="flex gap-6">
          <button
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
          </button>
          <Link to="/wishlist">
            <Heart size={18} color="#5D6570" strokeWidth={2.3} />
          </Link>
          <Link to="/cart">
            <ShoppingCart size={18} color="#5D6570" strokeWidth={2.3} />
          </Link>
        </div>

        {user ? (
          <UserButton />
        ) : (
          <button
            className={`px-5 py-1.5 text-[10px] rounded-full hover:bg-gray-500 cursor-pointer  transition-all duration-300 bg-black text-white `}
            onClick={openSignIn}
          >
            Login
          </button>
        )}

        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 cursor-pointer `}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
