import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo3.png";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div
      className={`top-0 left-0 w-full z-20 ${
        isHome ? "absolute bg-transparent" : "relative bg-base-100 shadow-sm"
      }`}
    >
      {/* --- Mobile Navbar (hamburger for < md) --- */}
      <div className="flex items-center justify-between px-6 py-4 md:hidden">
        {/* Logo */}
        <img src={logo} alt="TravelSite Logo" className="h-20 w-auto" />

        {/* Hamburger */}
        <button
          className="text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown (only when open) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 animate-fadeIn">
          <ul className="flex flex-col text-black text-lg space-y-3">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className="block hover:text-blue-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://www.fareclubs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full mt-3"
          >
            Book Your Trip Now
          </a>
        </div>
      )}

      {/* --- Tablet + Laptop + Desktop Navbar (>= md) --- */}
      <div className={`hidden md:block ${isHome ? "" : "text-gray-800"}`}>
        {/* Top Row - CTA Button */}
        <div className="flex justify-end px-6 pt-5">
          <a
            href="https://www.fareclubs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-3"
          >
            Book Your Trip Now
          </a>
        </div>

        {/* Bottom Row - Brand + Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 pb-3">
          {/* Logo */}
          <img src={logo} alt="TravelSite Logo" className="h-24 w-auto" />

          {/* Nav Items */}
          <ul
            className={`menu menu-horizontal text-lg lg:text-xl ml-6 flex-nowrap md:space-x-4 lg:space-x-6 md:pr-6 lg:pr-10 ${
              isHome ? "text-white" : "text-black"
            }`}
          >
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
