// FeaturedCategories.jsx
import React from "react";
import {
  FaMusic,
  FaChalkboardTeacher,
  FaBusinessTime,
  FaLeaf,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaMusic />,
    title: "Music & Concerts",
    description: "Live shows, DJ nights, and local band performances.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Workshops",
    description: "Hands-on learning in art, tech, wellness, and more.",
  },
  {
    icon: <FaBusinessTime />,
    title: "Business & Networking",
    description: "Meetups, seminars, and entrepreneur gatherings.",
  },
  {
    icon: <FaLeaf />,
    title: "Outdoor & Lifestyle",
    description: "Fairs, markets, yoga, and fitness events in your area.",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Featured Categories
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Browse popular event categories to find something that excites you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-gray-50 hover:bg-white p-6 rounded-xl border hover:border-blue-500 shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl text-blue-600 mb-4">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
