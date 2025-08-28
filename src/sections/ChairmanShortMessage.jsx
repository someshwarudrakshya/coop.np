import { NavLink } from "react-router-dom";
import chairman from "/src/assets/chairman.avif";
import "./css/ChairmanShortMessage.css";

export default function ChairmanShortMessage() {
  return (
    <div className="fluid-background">
      <div className="container">
        <section className="chairman-section">
          <div className="image-container">
            <img src={chairman} alt="Chairman portrait" loading="lazy" />
          </div>
          <div className="content">
            <div className="section-title">
              <h2>
                Message <span className="highlight">from the Chairman</span>
              </h2>
              <p className="sub-title">
                A tradition of service, a future of growth.
              </p>
            </div>
            <p className="message">
              It gives me great pleasure to extend my warm greetings to all our
              valued members. Our cooperative was founded with the vision of
              fostering financial security, sustainable growth, and community
              empowerment. With your continued trust and participation, we
              remain committed to delivering transparent, reliable, and
              member-focused services.
            </p>

            <div className="sign-section">
              <NavLink to="/About/MessageFrom" className="read-more-btn">
                Read More <span className="arrow">→</span>
              </NavLink>
              <p className="signature">
                – Chairman
                <br /> Mr.<span className="highlight"> Bhola Shah</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
