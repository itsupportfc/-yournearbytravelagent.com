import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo3.png";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    setShowForm(false);
  };

  return (
    <div
      className={`top-0 left-0 w-full z-20 ${
        isHome ? "absolute bg-transparent" : "relative bg-base-100 shadow-sm"
      }`}
    >
      {/* --- Mobile Navbar (hamburger for < md) --- */}
      <div className="flex items-center justify-between px-6 py-4 md:hidden">
        <img src={logo} alt="TravelSite Logo" className="h-20 w-auto" />

        <button
          className="text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
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
          <button
            onClick={() => {
              setShowForm(true);
              setIsOpen(false);
            }}
            className="btn btn-primary w-full mt-3"
          >
            Book Your Trip Now
          </button>
        </div>
      )}

      {/* --- Desktop Navbar --- */}
      <div className={`hidden md:block ${isHome ? "" : "text-gray-800"}`}>
        <div className="flex justify-end px-6 pt-5">
          <button
            onClick={() => setShowForm(true)}
            className="btn btn-primary mt-3"
          >
            Book Your Trip Now
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between px-6 pb-3">
          <img src={logo} alt="TravelSite Logo" className="h-24 w-auto" />

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

      {/* --- Popup Booking Form --- */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-11/12 max-w-md relative">
            {/* Close button */}
            <button
              className="absolute top-2 right-3 text-2xl font-bold text-gray-500 hover:text-gray-700"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>

            <h2 className="text-2xl font-semibold text-center mb-4">
              Book Your Trip
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  placeholder="Enter 10-digit number"
                  required
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              {/* From */}
              <div>
                <label className="block text-sm font-medium mb-1">From</label>
                <input
                  type="text"
                  placeholder="Departure City"
                  required
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              {/* To */}
              <div>
                <label className="block text-sm font-medium mb-1">To</label>
                <input
                  type="text"
                  placeholder="Destination City"
                  required
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
