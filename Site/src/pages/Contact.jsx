import React, { useState } from "react";
import airplaneImage from "../assets/airplane.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Just show success alert (no EmailJS)
    alert("Message sent successfully! Our Agent will get back to you soon");

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left: Form */}
      <div className="lg:w-1/2 w-full bg-white flex items-center justify-center">
        <div className="w-full max-w-md px-4 py-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter a valid email address"
                required
                className="w-1/2 border-b border-gray-400 focus:outline-none focus:border-blue-500 pb-2"
              />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                required
                className="w-1/2 border-b border-gray-400 focus:outline-none focus:border-blue-500 pb-2"
              />
            </div>

            <div className="flex gap-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                className="w-1/2 border-b border-gray-400 focus:outline-none focus:border-blue-500 pb-2"
              />
              <input
                type="date"
                name="date"
                className="w-1/2 border-b border-gray-400 focus:outline-none focus:border-blue-500 pb-2"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 pb-2 resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="px-6 py-2 border border-black text-black font-semibold hover:bg-black hover:text-white transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Right: Image */}
      <div className="lg:w-1/2 w-full flex items-center justify-center">
        <img
          src={airplaneImage}
          alt="Airplane Window"
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Contact;