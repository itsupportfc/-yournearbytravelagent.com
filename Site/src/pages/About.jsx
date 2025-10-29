import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)", // Travel beach image
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            About Us
          </h1>
        </div>
      </div>

      {/* Company Story */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At <span className="font-bold">YourNearByTravelAgent</span>, we believe
            traveling is more than just visiting new places – it’s about
            creating lifelong memories. Founded with a passion for exploration,
            we specialize in curating personalized travel experiences across the
            globe. From exotic beach getaways to adventurous mountain treks, we
            make sure your journey is smooth, safe, and unforgettable.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              🌍 Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To empower travelers by offering affordable, reliable, and unique
              travel solutions while ensuring sustainability and cultural
              appreciation. We want every traveler to experience the joy of
              discovering new places with ease and comfort.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              ✈️ Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted travel partner worldwide, inspiring
              people to step out of their comfort zones and embrace the beauty
              of diverse cultures, nature, and adventure.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-gray-600 mb-6">
            Whether it’s a family vacation, honeymoon, or solo trip, we’re here
            to make it memorable.
          </p>
          <Link
            to="/contact"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition cursor-pointer"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
