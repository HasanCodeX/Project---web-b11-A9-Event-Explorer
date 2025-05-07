import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify"; // টোস্ট মেসেজ দেখানোর জন্য

const EventDetails = () => {
  const location = useLocation(); // লোকেশন থেকে ডেটা নেওয়া হচ্ছে
  const event = location.state?.event; // ডেটা যদি থাকে তাহলে সেটা নেওয়া হবে

  const [name, setName] = useState(""); // নাম ফিল্ড
  const [email, setEmail] = useState(""); // ইমেইল ফিল্ড
  const [loading, setLoading] = useState(false); // সাবমিট বাটনের জন্য লোডিং
  const [eventLoading, setEventLoading] = useState(true); // ইভেন্ট লোডিং

  useEffect(() => {
    // ইভেন্ট ডেটা পেলে লোডিং বন্ধ হবে
    if (!event) {
      setEventLoading(true);
    } else {
      setEventLoading(false);
    }
  }, [event]);

  console.log(event)
  const handleSubmit = (e) => {
    e.preventDefault();

    // যদি ইনপুট ফাঁকা থাকে, তাহলে এরর দেখাও
    if (!name || !email) {
      toast.error("সব ঘর পূরণ করুন!");
      return;
    }

    setLoading(true); // বাটনের উপর লোডিং

    setTimeout(() => {
      setLoading(false);
      toast.success("সফলভাবে সিট রিজার্ভ হয়েছে!");
      setName(""); // ফর্ম ক্লিয়ার
      setEmail("");
    }, 1000);
  };

  if (eventLoading) {
    return <div>ইভেন্টের তথ্য লোড হচ্ছে...</div>;
  }

  if (!event) {
    return <div>কোনো ইভেন্ট পাওয়া যায়নি!</div>;
  }

  return (
    <div className="event-details">
      <h1>{event.name}</h1>
      <img src={event.thumbnail} alt={event.name} className="w-full h-64 object-cover rounded" />
      <p><strong>ক্যাটাগরি:</strong> {event.category}</p>
      <p><strong>তারিখ:</strong> {event.date}</p>
      <p><strong>স্থান:</strong> {event.location}</p>
      <p><strong>এন্ট্রি ফি:</strong> {event.entryFee}</p>
      <p><strong>বর্ণনা:</strong> {event.description}</p>

      <div className="reservation-form">
        <h2>আপনার সিট রিজার্ভ করুন</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name">নাম</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="আপনার নাম লিখুন"
              className="border p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="email">ইমেইল</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="আপনার ইমেইল লিখুন"
              className="border p-2 w-full"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {loading ? "রিজার্ভ করা হচ্ছে..." : "সিট রিজার্ভ করুন"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventDetails;
