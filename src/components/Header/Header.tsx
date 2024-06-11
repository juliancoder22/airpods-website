import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-between items-center absolute top-0 w-full p-4 bg-white">
      <span className="font-semibold text-xl tracking-widest">Airpods</span>
      <nav
        className={`${
          isMobileMenuOpen
            ? "flex flex-col justify-center items-center fixed top-0 left-0 w-full h-full bg-white z-50"
            : "hidden"
        } md:flex md:flex-row md:static md:gap-10 md:pl-12`}
      >
        <a
          href="#"
          className="font-semibold text-stone-900 text-xl md:text-lg md:mt-0 mt-4"
        >
          Demos
        </a>
        <a
          href="#"
          className="font-semibold text-stone-900 text-xl md:text-lg md:mt-0 mt-4"
        >
          Pages
        </a>
        <a
          href="#"
          className="font-semibold text-stone-900 text-xl md:text-lg md:mt-0 mt-4"
        >
          Support
        </a>
        <a
          href="#"
          className="font-semibold text-stone-900 text-xl md:text-lg md:mt-0 mt-4"
        >
          Contact
        </a>
      </nav>
      <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg mb-4 text-sm hidden md:block">
        Buy now - Starting at $99
      </button>
      <button className="text-black md:hidden z-50" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
      </button>
    </header>
  );
};

export default Header;
