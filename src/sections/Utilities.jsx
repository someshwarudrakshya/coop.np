import React from "react";
import { useNavigate } from "react-router-dom"; // for same-tab navigation
import "./css/Utilities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faCalendarAlt,
  faDownload,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

export default function Utilities() {
  const navigate = useNavigate(); // for same-tab navigation

  // Reusable utilities
  const utilities = [
    {
      icon: faCalculator,
      title: "EMI Calculator",
      desc: "Effortlessly compute your loan installments.",
      btnText: "Calculate",
      btnClass: "btn btn-primary",
      onClick: () => window.open("/EmiCalculator", "_blank"),
    },
    {
      icon: faCalendarAlt,
      title: "Nepali Calendar",
      desc: "Discover the vibrant tapestry of the Nepali calendar.",
      btnText: "Calendar",
      btnClass: "btn btn-secondary",
      onClick: () => window.open("/NepalWidgets", "_blank"),
    },
    {
      icon: faDownload,
      title: "Downloads",
      desc: "Seamlessly access essential forms and documents.",
      btnText: "Download",
      btnClass: "btn btn-secondary",
      onClick: () => navigate("/Download"),
    },
  ];

  return (
    <section className="container mb-5">
      <div className="section-title">
        <h2 className="text-center mb-4">
          Quick <span className="highlight">Utilities</span>
        </h2>
        <p className="section-subtitle text-center">
          Experience the difference of working with a values-driven organization
        </p>
      </div>

      <div className="utilities-grid">
        {utilities.map((u, i) => (
          <div className="utility-card" key={i}>
            <div className="text-primary mb-3">
              <FontAwesomeIcon icon={u.icon} size="2x" />
            </div>
            <h5>{u.title}</h5>
            <p className="small">{u.desc}</p>
            <button
              className={`btn ${u.btnClass}`}
              aria-label={`Open ${u.title}`}
              onClick={u.onClick}
            >
              {u.btnText}
            </button>
          </div>
        ))}

        <div className="utility-card notice-card">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="text-danger me-2">
              <FontAwesomeIcon icon={faBullhorn} size="2x" />
            </div>
            <h5 className="mb-0">Latest Notice</h5>
          </div>
          <div className="notice-content">
            <p className="mb-1">
              <strong>For Recent Highlights & Announcements</strong>
            </p>
            <p className="small mb-1">Click Link Below</p>
            <button
              className="btn btn-danger"
              onClick={() => window.open("/news&events", "_blank")}
            >
              Updates & Highlights
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
