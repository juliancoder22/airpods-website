import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-between items-center w-full p-4 bg-white shadow-md">
      <span className="font-semibold text-xl tracking-widest">Airpods</span>
      <nav
        className={`${
          isMobileMenuOpen
            ? "fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col justify-center items-center menu-enter"
            : "hidden"
        } md:flex md:flex-row md:static md:gap-8 md:pl-12`}
      >
        <a
          href="#demos"
          className="font-semibold text-stone-900 text-lg md:text-xl md:mt-0 mt-4"
        >
          Demos
        </a>
        <a
          href="#pages"
          className="font-semibold text-stone-900 text-lg md:text-xl md:mt-0 mt-4"
        >
          Pages
        </a>
        <a
          href="#support"
          className="font-semibold text-stone-900 text-lg md:text-xl md:mt-0 mt-4"
        >
          Support
        </a>
        <a
          href="#contact"
          className="font-semibold text-stone-900 text-lg md:text-xl md:mt-0 mt-4"
        >
          Contact
        </a>
        <a
          href="#about"
          className="font-semibold text-stone-900 text-lg md:text-xl md:mt-0 mt-4"
        >
          About
        </a>
        <div className="mt-8 flex flex-col items-center md:hidden">
          <p className="text-stone-900 text-center mb-4">
            Explore AirPods and their amazing features.
          </p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg mb-4">
            Buy now - Starting at $99
          </button>
          <a href="#contact" className="text-blue-700 font-semibold">
            Contact Us
          </a>
        </div>
      </nav>
      <div className="flex items-center ">
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg mb-4 text-sm hidden md:block">
          Buy now - Starting at $99
        </button>
        <button
          className="text-black md:hidden z-50 ml-4"
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faTimes : faBars}
            size="lg"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
