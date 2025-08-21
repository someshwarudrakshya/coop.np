import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="container">
          <h1>About Our Cooperative</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / About Us
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-image">
              <img src="/images/rudraksh-farming.jpg" alt="Rudraksh farming" />
            </div>
            <div className="mission-text">
              <h2>Our Mission & Vision</h2>
              <p>...</p>
              <div className="stats-grid">
                <div className="stat-card">...</div>
                <div className="stat-card">...</div>
                <div className="stat-card">...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <h2>Our History</h2>
          <div className="timeline">
            <div className="timeline-item">...</div>
            <div className="timeline-item">...</div>
            <div className="timeline-item">...</div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Leadership</h2>
          <div className="team-grid">
            <div className="team-card">...</div>
            <div className="team-card">...</div>
            <div className="team-card">...</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Join Our Community</h2>
          <p>...</p>
          <div className="cta-buttons">
            <Link to="/membership" className="cta-button-primary">
              Become a Member
            </Link>
            <Link to="/contact" className="cta-button-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
