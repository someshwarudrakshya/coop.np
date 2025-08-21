import React from "react";
import "../styles/ImportantLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faCalendarAlt,
  faDownload,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

export default function ImportantLinks() {
  return (
    <section className="important-links">
      <div className="container">
        <div className="section-title">
          <h2>
            Important <span className="highlight">Links</span>
          </h2>
          <p>Quick access to our essential tools and resources.</p>
        </div>
        <div className="links-grid">
          <div className="link-card">
            <div className="link-icon">
              <FontAwesomeIcon icon={faCalculator} />
            </div>
            <div className="link-content">
              <h3>EMI Calculator</h3>
              <a href="/tools/emi-calculator" className="link-button">
                Calculate
              </a>
            </div>
          </div>

          <div className="link-card">
            <div className="link-icon">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </div>
            <div className="link-content">
              <h3>Date Converter</h3>
              <a href="/tools/date-converter" className="link-button">
                Convert
              </a>
            </div>
          </div>

          <div className="link-card">
            <div className="link-icon">
              <FontAwesomeIcon icon={faDownload} />
            </div>
            <div className="link-content">
              <h3>Downloads</h3>
              <a href="/resources/downloads" className="link-button">
                Download
              </a>
            </div>
          </div>

          <div className="link-card">
            <div className="link-icon">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="link-content">
              <h3>Notices</h3>
              <a href="/notices" className="link-button">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
