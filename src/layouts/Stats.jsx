import React, { useEffect, useState } from "react";
import "../styles/Stats.css"; // Import the CSS file

const Stats = [
  { number: 2000, label: "Member-Owners" },
  { number: 200, label: "Loans" },
  { number: 7, label: "Cooperative Principles" },
  { number: 2, label: "Area" },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(Stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, i) => {
          const target = Stats[i].number;
          const increment = Math.ceil(target / 100); // speed up
          return count < target ? Math.min(count + increment, target) : count;
        })
      );
    }, 30); // update every 30ms

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {Stats.map((item, i) => (
            <div key={i} className="stat-item">
              <div className="stat-number">{counts[i].toLocaleString()}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
