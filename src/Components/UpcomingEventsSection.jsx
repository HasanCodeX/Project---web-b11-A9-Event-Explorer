import React, { useEffect, useState } from "react";
import EventCard from "./EventCard"; // Ensure you create an EventCard component for each event
import Loading from "./Loading"; // Assuming this is the loading component you're using

const UpcomingEventsSection = () => {
  const [visibleEvents, setVisibleEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Fetch events data
    fetch("/data/events.json") // This path should have your events JSON data
      .then((res) => res.json())
      .then((data) => {
        setAllEvents(data);
        setVisibleEvents(data.slice(0, 3)); // Show only 6 events initially
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch events data", err);
        setLoading(false);
      });
  }, []);

  const handleShowAll = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleEvents(allEvents);
      setLoading(false);
      setShowAll(true);
    }, 1000); // simulate loading delay
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Upcoming Events</h2>
        <p className="text-gray-600 mt-2">
          Explore upcoming local events ranging from conferences to workshops and more!
        </p>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleEvents.map((event) => (
            <EventCard key={event.name} event={event} />
          ))}
        </div>
      )}

      {!showAll && !loading && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowAll}
            className="btn btn-primary rounded-3xl px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            View All Events
          </button>
        </div>
      )}
    </div>
  );
};

export default UpcomingEventsSection;
