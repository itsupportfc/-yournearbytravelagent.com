import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] sm:h-[80vh] md:h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://t4.ftcdn.net/jpg/06/69/95/09/360_F_669950938_7EGCde3piThlCL3c4TLC76N50KJRW66d.jpg)",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-end justify-start h-full px-4 sm:px-8 md:px-16 pb-10 sm:pb-16 md:pb-20">
          <div className="max-w-lg text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-3 sm:mb-4">
              YournearbyTravelAgent's One Mission
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white mb-5 sm:mb-6">
              Uniting People and Places across the Planet
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="btn btn-primary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-center">
            Our Services
          </h2>
          <p className="mb-8 sm:mb-12 text-gray-700 text-center max-w-3xl mx-auto">
            We are committed to presenting the best services to our clients to
            enhance their travel experience and equip them with unforgettable
            journeys.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Air Ticket Consolidation",
                img: "https://rnrtraveltech.com/Media/Air-Ticket-Consolidation.jpg",
                desc: "Affordable flights & seamless booking for agents and clients with well-planned travel itineraries.",
              },
              {
                title: "Personalised Travel Packages",
                img: "https://rnrtraveltech.com/Media/personalised-map.jpg",
                desc: "Tailor-made packages designed to suit every traveler’s preferences and budget.",
              },
              {
                title: "Hassle-Free Bookings",
                img: "https://rnrtraveltech.com/Media/Hassle-free.jpg",
                desc: "From tickets to accommodations, we take care of every detail for a smooth experience.",
              },
              {
                title: "24/7 Customer Support",
                img: "https://rnrtraveltech.com/Media/24-7.jpg",
                desc: "Round-the-clock assistance to help with unexpected travel hiccups.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-44 sm:h-48 md:h-56 object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 flex-1">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-center">
            Why Choose Us?
          </h2>
          <p className="mb-8 sm:mb-12 text-gray-700 text-center max-w-3xl mx-auto">
            YourNearByTravelAgent understands your need for extraordinary travel
            experiences. Our dedication, meticulous planning, and professional
            guidance set us apart.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Expertise",
                img: "https://rnrtraveltech.com/Media/expertise.jpg",
                desc: "Decades of experience and in-depth knowledge of destinations.",
              },
              {
                title: "Affordability",
                img: "https://rnrtraveltech.com/Media/save-money.jpeg",
                desc: "Accessible travel without compromising on quality.",
              },
              {
                title: "Customer-Centric",
                img: "https://rnrtraveltech.com/Media/customer-satisfaction.jpg",
                desc: "Journeys crafted to match your unique aspirations.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-44 sm:h-48 md:h-56 object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 flex-1">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
