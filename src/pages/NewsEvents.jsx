import { useState } from "react";

export default function NewsEvents() {
  const allNews = [
    {
      id: 1,
      title: "New Branch Opening in Kathmandu",
      date: "2025-08-01",
      summary:
        "We are excited to announce the opening of our new branch office in Kathmandu.",
    },
    {
      id: 2,
      title: "Annual Report Released",
      date: "2025-07-15",
      summary:
        "Check out the comprehensive annual report for fiscal year 2081.",
    },
  ];

  const allEvents = [
    {
      id: 1,
      name: "Member Meet & Greet",
      date: "2025-09-10",
      location: "Conference Hall, Main Branch",
      description:
        "An opportunity for members to meet and interact with management and fellow members.",
    },
    {
      id: 2,
      name: "Life Insurance Awareness Seminar",
      date: "2025-10-05",
      location: "Online Webinar",
      description:
        "A seminar focusing on the benefits and myths of life insurance.",
    },
  ];

  const [newsCount, setNewsCount] = useState(3);
  const [eventsCount, setEventsCount] = useState(3);

  return (
    <div className="max-w-5xl centered padding space-y-12">
      {/* News Section */}
      <section>
        <h2 className="text-color bold mb-4">📰 Latest News</h2>
        <ul className="space-y-4">
          {allNews.slice(0, newsCount).map((news) => (
            <li key={news.id} className="padding border rounded bg-color shadow">
              <h3 className="font-semibold text-color">{news.title}</h3>
              <p className="text-color text-color-500">{news.date}</p>
              <p className="mt-2">{news.summary}</p>
            </li>
          ))}
        </ul>
        {newsCount < allNews.length && (
          <button
            onClick={() => setNewsCount((c) => c + 3)}
            className="mt-4 px-4 py-2 bg-color-500 text-color rounded"
          >
            Load More News
          </button>
        )}
      </section>

      {/* Events Section */}
      <section>
        <h2 className="text-color bold mb-4">📅 Upcoming Events</h2>
        <div className="space-y-4">
          {allEvents.slice(0, eventsCount).map((event) => (
            <div key={event.id} className="padding border rounded bg-color shadow">
              <h3 className="font-semibold text-color">{event.name}</h3>
              <p className="text-color text-color-500">{event.date} – {event.location}</p>
              <p className="mt-2">{event.description}</p>
            </div>
          ))}
        </div>
        {eventsCount < allEvents.length && (
          <button
            onClick={() => setEventsCount((c) => c + 3)}
            className="mt-4 px-4 py-2 bg-color-500 text-color rounded"
          >
            Load More Events
          </button>
        )}
      </section>
    </div>
  );
}
