import React from "react";
import "../styles/ChairmanStory.css";

export default function ChairmanStory() {
  return (
    <section className="chairman-story">
      <div className="container">
        <div className="chairman-card card">
          <img src="/chairman.avif" alt="Chairman" className="chairman-photo" />
          <h3>Message from the Chairman</h3>
          <p>
            Dear members, friends and supporters...
            <br /> Together we will build a strong cooperative future.
          </p>
          <a href="/chairman-message" className="read-more">
            Read More
          </a>
        </div>

        <div className="story-card card">
          <h2>Our Beginning Story</h2>
          <p>
            Our journey began with a shared vision for financial inclusion and
            community progress. Through dedication, we have grown steadily and
            now proudly support 2000+ members...
          </p>
          <a href="/our-story" className="read-more">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
