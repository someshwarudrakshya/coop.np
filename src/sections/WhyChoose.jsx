import "./css/WhyChoose.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faShieldAlt,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function WhyChoose() {
  const points = [
    {
      title: "Member-first",
      text: "We return value to our member-owners.",
      icon: faUsers,
    },
    {
      title: "Secure",
      text: "Compliant, audited, and transparent operations.",
      icon: faShieldAlt,
    },
    {
      title: "Community",
      text: "Programs that directly benefit local people.",
      icon: faHandHoldingHeart,
    },
  ];

  return (
    <div className="fluid-background">
      <div className="container">
        <section className="whychoose-section">
          <div className="section-title">
            <h2> Why <span className="highlight">Choose Us</span></h2>
            <p className="section-subtitle">
              Experience the difference of working with a values-driven
              organization
            </p>
          </div>
          <div className="features-grid">
            {points.map((p) => (
              <div key={p.title} className="feature-card">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={p.icon} />
                </div>
                <h3 className="feature-title">{p.title}</h3>
                <p className="feature-text">{p.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
