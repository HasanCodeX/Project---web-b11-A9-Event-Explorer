import React, { useState } from "react";
import { toast } from "react-toastify";

const EventCard = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleReserve = () => {
    if (!name || !email) {
      toast.error("Please enter both name and email", { autoClose: 1000 });
      return;
    }

    toast.success("Seat Reserved Successfully!", { autoClose: 1000 });
    setName("");
    setEmail("");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
      {/* Event Thumbnail */}
      <img
        src={event.thumbnail}
        alt={event.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        {/* Event Title */}
        <h3 className="text-xl font-semibold text-gray-800">{event.name}</h3>

        {/* Event Category */}
        <p className="text-sm text-gray-500 mt-2">{event.category}</p>

        {/* Event Date */}
        <p className="text-md text-gray-700 mt-4">
          <strong>Date:</strong> {event.date}
        </p>

        {/* Event Location */}
        <p className="text-md text-gray-700 mt-2">
          <strong>Location:</strong> {event.location}
        </p>

        {/* Event Entry Fee */}
        <p className="text-md text-gray-700 mt-2">
          <strong>Entry Fee:</strong> {event.entryFee}
        </p>

        {/* View More Button */}
        {!showDetails && (
          <div className="mt-4">
            <button
              onClick={() => setShowDetails(true)}
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
            >
              View More
            </button>
          </div>
        )}

        {/* Reservation Form */}
        {showDetails && (
          <div className="mt-6 space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
            />
            <button
              onClick={handleReserve}
              className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all"
            >
              Reserve Seat
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
