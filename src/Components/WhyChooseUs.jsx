// WhyChooseUs.jsx
import React from "react";
import {
  FaCheckCircle,
  FaUserFriends,
  FaCalendarAlt,
  FaShieldAlt,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaCalendarAlt />,
    title: "Curated Events",
    description: "Discover expertly selected events tailored to your interests.",
  },
  {
    icon: <FaUserFriends />,
    title: "Community-Centric",
    description: "Engage with a vibrant community of attendees and organizers.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Verified Listings",
    description: "Attend with confidence—every event is carefully vetted.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Seamless Booking",
    description: "Effortlessly register and manage your event participation.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="m-8 rounded-4xl bg-gradient-to-br from-blue-100 via-purple-100 to-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose <span className="text-blue-600">Event Explorer</span>?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base mb-10 px-2">
          Explore the benefits that make Event Explorer your go-to platform for discovering, attending, and enjoying local events.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
             

             <div className="flex items-center justify-center text-4xl sm:text-5xl text-blue-600 mb-4">
  {benefit.icon}
</div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
