import React from "react";
import { useLocation } from "react-router-dom";

const EventDetails = () => {
  const location = useLocation();
  const event = location.state?.event || {
    id: 1,
    name: "Tech Conference 2025",
    thumbnail: "https://i.ibb.co/N26HnVz/image8.jpg",
    category: "Tech",
    date: "June 15, 2025",
    location: "San Francisco, CA",
    entryFee: "$50",
    description: "Join industry leaders and tech enthusiasts for a cutting-edge conference featuring the latest trends in AI, blockchain, and robotics. Don't miss out on the most anticipated tech event of the year!",
  };

  return (
    <div className="event-details max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
      <img src={event.thumbnail} alt={event.name} className="w-full h-64 object-cover rounded mb-4" />
      <p><strong>Category:</strong> {event.category}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Entry Fee:</strong> {event.entryFee}</p>
      <p className="mt-4 text-gray-700">{event.description}</p>
    </div>
  );
};

export default EventDetails;
