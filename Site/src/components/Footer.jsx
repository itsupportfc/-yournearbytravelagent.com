import React from "react";
import { FaInstagram, FaFacebookF,  FaYoutube, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/Logo3.png"; // Replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="space-y-4">
          <img src={logo} alt="RNR TravelTech" className="h-12 w-auto bg-white" />
          <p className="text-gray-300 text-sm">
            We are a long-standing travel force, known for excellence. With 1000+ cities explored, our bucket list keeps growing. Our ultimate aim: crafting overseas memories with you.
          </p>
        </div>

        {/* About RNR TravelTech */}
        <div>
          <h3 className="font-semibold mb-3">About YourNearByTravelAgent</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-blue-400">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-gray-300 text-sm cursor-pointer hover:text-blue-400">info@yournearbytravelagent.com</p>
          <p className="text-gray-300 text-sm cursor-pointer hover:text-blue-400">+91-1245180900</p>
          
        </div>
      </div>

    </footer>
  );
};

export default Footer;