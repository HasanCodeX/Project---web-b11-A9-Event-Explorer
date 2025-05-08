
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ariana Gomez",
    role: "Frequent Attendee",
    quote:
      "Event Explorer makes it super easy to discover local events I never knew existed. It’s my go-to app every weekend!",
  },
  {
    name: "David Liu",
    role: "Workshop Organizer",
    quote:
      "As an organizer, listing events here has increased my visibility and attendance drastically. Highly recommended!",
  },
  {
    name: "Sara Khalid",
    role: "Music Enthusiast",
    quote:
      "I love how seamless the booking process is. Plus, the event curation is top-notch!",
  },
];

const Testimonials = () => {
  return (
    <section className="rounded-4xl bg-gradient-to-br from-purple-50 via-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8 m-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          What People Are Saying
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Hear from our attendees and organizers about their experiences with Event Explorer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-left"
            >
              <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
              <p className="text-gray-700 mb-4">"{t.quote}"</p>
              <div className="text-sm text-gray-800 font-semibold">
                {t.name}
              </div>
              <div className="text-xs text-gray-500">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
