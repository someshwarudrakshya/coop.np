import "./css/CTA.css";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="CTA-container">
        <div className="cta-grid">
          <div className="cta-text">
            <h2 className="cta-title">Ready to become a member?</h2>
            <p className="cta-subtitle">
              Join <span className="highlight">2,000+</span> members building a
              stronger community.
            </p>
          </div>
          <div className="cta-buttons">
            <a className="btn btn-primary" href="/download">
              Download Forms
            </a>
            <a className="btn btn-secondary" href="/contact">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
