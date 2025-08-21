import React, { useState } from "react";
import "../styles/ServiceSection.css";

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
        "24/7 online access",
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
    insurance: {
      title: "Insurance Products",
      description:
        "Protect what matters most with our comprehensive insurance coverage options.",
      features: [
        "Life insurance",
        "Health coverage",
        "Property protection",
        "Crop insurance",
        "Affordable premiums",
      ],
      img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  };

  const additionalServices = [
    {
      title: "Investment Plans",
      description:
        "Grow your wealth with our carefully curated investment opportunities.",
      icon: "📈",
      link: "#investments",
    },
    {
      title: "Mobile Banking",
      description:
        "Access your accounts anytime, anywhere with our secure mobile app.",
      icon: "📱",
      link: "#mobile",
    },
    {
      title: "Retirement Planning",
      description: "Secure your future with our tailored retirement solutions.",
      icon: "👵",
      link: "#retirement",
    },
  ];

  return (
    <main className="services-container">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1>
            Our <span className="highlight">Services</span>
          </h1>
          <p className="hero-subtitle">
            Financial solutions designed with our members' needs in mind
          </p>
          <p className="hero-description">
            At Namuna Cooperative Society, we offer a comprehensive range of
            financial products designed to meet your unique needs and help you
            achieve your financial goals.
          </p>
        </div>
      </section>

      {/* Tabbed Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-title">
            <h2>
              Our <span className="highlight">Core Services</span>
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
                <a href="#learn-more" className="btn btn-primary">
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
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="additional-services">
        <div className="container">
          <div className="section-title">
            <h2>
              Additional <span className="highlight">Services</span>
            </h2>
            <p>More ways we can help you achieve financial success</p>
          </div>

          <div className="services-grid">
            {additionalServices.map((service, index) => (
              <div className="card service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <div className="service-content">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <a href={service.link} className="btn btn-secondary">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-title">
            <h2>
              Why Choose <span className="highlight">Namuna Cooperative</span>?
            </h2>
            <p>We're committed to our members' financial well-being</p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">👥</div>
              <h3>Member-Owned</h3>
              <p>
                We're owned by our members, so profits are returned to you
                through better rates and services.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Community Focused</h3>
              <p>
                We reinvest in local communities and support economic
                development initiatives.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💎</div>
              <h3>Trusted Expertise</h3>
              <p>
                With over 25 years of experience, we provide reliable financial
                guidance.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Digital Access</h3>
              <p>
                Manage your accounts anytime, anywhere with our secure online
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>
            Join thousands of members who trust us with their financial needs
          </p>
          <div className="cta-buttons">
            <a href="#become-member" className="btn btn-large btn-primary">
              Become a Member
            </a>
            <a href="#contact" className="btn btn-large btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
