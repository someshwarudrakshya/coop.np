import React from "react";
import { motion } from "framer-motion";
import "./css/Events.css";

export default function Events() {
  const events = [
    {
      date: "January 15, 2025",
      title: "Annual General Meeting",
      desc: "Discussion of cooperative progress and new plans.",
    },
    {
      date: "March 8, 2025",
      title: "International Women’s Day Program",
      desc: "Special program to empower women members.",
    },
    {
      date: "May 1, 2025",
      title: "Labor Day Celebration",
      desc: "Cultural events and recognition of hardworking members.",
    },
    {
      date: "August 20, 2025",
      title: "Skill Development Training",
      desc: "Free training sessions for members.",
    },
    {
      date: "November 10, 2025",
      title: "Annual Financial Report",
      desc: "Presentation of yearly financial transparency.",
    },
    {
      date: "December 25, 2025",
      title: "Member Appreciation Day",
      desc: "Celebration with gifts and certificates.",
    },
  ];

  return (
    <section>
      <div className="section-title">
        <h2 className="events-title">Our Yearly <span className="highlight">Highlighted Events</span></h2>
        <p className="events-description">
          Join us for a series of engaging events throughout the year, designed
          to foster community and collaboration.
        </p>
      </div>

      <div className="timeline">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="content"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="date">{event.date}</span>
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
