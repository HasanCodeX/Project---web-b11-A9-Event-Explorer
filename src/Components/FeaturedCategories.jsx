

// FeaturedCategories.jsx
import React from "react";
import { FaPaintBrush, FaLaptopCode, FaFootballBall, FaTheaterMasks } from "react-icons/fa";

const categories = [
  { icon: <FaLaptopCode />, title: "Tech", description: "Workshops, Hackathon Events, Conferences" },
  { icon: <FaPaintBrush />, title: "Art", description: "Exhibitions, Galleries, Auctions" },
  { icon: <FaFootballBall />, title: "Sports", description: "Tournaments, Marathons, Matches" },
  { icon: <FaTheaterMasks />, title: "Culture", description: "Theatre, Festivals, Talks" },
];

const FeaturedCategories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Explore by Category</h2>
        <p className="text-gray-600 mt-2">Find events that match your interests</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-2 border-blue-200"
          >
            <div className="text-4xl text-blue-600 mb-4">{cat.icon}</div>
            <h3 className="text-xl font-semibold">{cat.title}</h3>
            <p className="text-gray-500 mt-1">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
