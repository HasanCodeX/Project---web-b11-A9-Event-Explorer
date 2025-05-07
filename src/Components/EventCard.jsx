import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <img
        src={event.thumbnail}
        alt={event.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-xl font-semibold text-gray-800">{event.name}</h3>
      <p className="text-sm text-gray-500 mt-2">{event.description}</p>

      <div className="flex justify-center">
        <Link to={`/events/${event.id}`} state={{ event }}>
          <button className="rounded-4xl mt-4 py-2 px-4 bg-blue-600 text-white hover:bg-blue-700 transition">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
