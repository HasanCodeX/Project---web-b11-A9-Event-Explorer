import React from "react";
import { useLocation } from "react-router-dom";

const EventDetails = () => {
  const location = useLocation(); // Get event data from location state
  const event = location.state?.event; // Safely access event data

  if (!event) {
    return <div>Loading event details...</div>;
  }

  return (
    <div className="event-details">
      <h1>{event.name}</h1>
      <img src={event.thumbnail} alt={event.name} />
      <p><strong>Category:</strong> {event.category}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Entry Fee:</strong> {event.entryFee}</p>
      <p><strong>Description:</strong> {event.description}</p>
    </div>
  );
};

export default EventDetails;
