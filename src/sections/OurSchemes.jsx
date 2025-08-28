import React, { useState } from "react";
import "./css/OurSchemes.css";

export default function Services() {
  const [activeTab, setActiveTab] = useState("savings");

  const tabServices = {
    savings: {
      title: "Savings Accounts",
      description:
        "Competitive dividend rates with no hidden fees. Your savings help fund loans to other members.",
      features: [
        "Competitive interest rates",
        "No hidden fees",
        "Flexible deposit options",
        "24/7 online deposit",
        "Insurance protection",
      ],
      img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    loans: {
      title: "Affordable Loans",
      description:
        "Lower interest rates than traditional banks. Loan decisions made by people who know our community.",
      features: [
        "Low-interest rates",
        "Flexible repayment plans",
        "Quick approval process",
        "Minimal documentation",
        "Customized loan solutions",
      ],
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    education: {
      title: "Financial Education",
      description:
        "Free workshops and resources to help you achieve your financial goals.",
      features: [
        "Budgeting workshops",
        "Investment planning",
        "Retirement strategies",
        "Debt management",
        "One-on-one counseling",
      ],
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  };

  return (
    <section className="container">
      <div className="section-title">
        <h2>
          Our <span className="highlight">Schemes</span>
        </h2>
        <p>Explore our main financial products and solutions</p>
      </div>

      <div className="services-tabs">
        <div className="tab-buttons">
          {Object.keys(tabServices).map((key) => (
            <button
              key={key}
              className={`tab-button ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {tabServices[key].title}
            </button>
          ))}
        </div>

        <div className="tab-content">
          <div className="service-detail">
            <h3>{tabServices[activeTab].title}</h3>
            <p>{tabServices[activeTab].description}</p>
            <ul>
              {tabServices[activeTab].features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <a href="#learn-more" className="btn">
              Learn More
            </a>
          </div>
          <div className="service-image">
            <img
              src={tabServices[activeTab].img}
              alt={tabServices[activeTab].title}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
