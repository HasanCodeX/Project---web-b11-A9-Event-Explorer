import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const EventDetails = () => {
  const location = useLocation();
  const event = location.state?.event;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [eventLoading, setEventLoading] = useState(true);

  useEffect(() => {
    if (event) {
      setEventLoading(false);
    }
  }, [event]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Seat reserved successfully!");
      setName("");
      setEmail("");
    }, 1000);
  };

  if (eventLoading) {
    return <div className="text-center text-gray-600 mt-10">Loading event details...</div>;
  }

  if (!event) {
    return <div className="text-center text-red-600 mt-10">No event found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
       <Helmet>
        <title>Details | Event Explorer</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
      <img
        src={event.thumbnail}
        alt={event.name}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <div className="space-y-2 text-gray-700">
        <p><strong>Category:</strong> {event.category}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Entry Fee:</strong> {event.entryFee}</p>
        <p><strong>Description:</strong> {event.description}</p>
      </div>

      <div className="mt-8 bg-gray-100 p-6 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Reserve Your Seat</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            {loading ? "Reserving..." : "Reserve Seat"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventDetails;
