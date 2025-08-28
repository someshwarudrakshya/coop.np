import { FaShieldAlt, FaBriefcase, FaLandmark } from "react-icons/fa";
import Note from "../../components/Note.jsx";
import "./css/Loan.css";

export default function Loan() {
  return (
    <section className="container">
      {/* Hero Section */}
      <div className="loan-hero">
        <div className="section-title">
          <h2>
            Loan Facilities <span className="highlight">for Members</span>
          </h2>
          <p>
            Reliable and secure financial support to meet your personal and
            business needs.
          </p>
        </div>
      </div>

      {/* Loan Cards */}
      <section className="loan-cards">
        <div className="loan-card">
          <div className="icon-wrapper">
            <FaShieldAlt className="loan-icon" />
          </div>
          <h3>Secured Loan</h3>
          <p>
            Secured Loan is provided securely based on the amount deposited in
            members’ savings accounts. Depending on savings and repayment
            capacity, 50% to 90% of the deposited amount can be lent through a
            simple process. It offers lower interest rates and supports members
            in emergencies or short-term investment needs.
          </p>
        </div>

        <div className="loan-card">
          <div className="icon-wrapper">
            <FaBriefcase className="loan-icon" />
          </div>
          <h3>Business Loan</h3>
          <p>
            Business Loan is provided based on the member’s savings with a
            multiplier (2–3x) as collateral. The maximum term is one year (up to
            NPR 200,000). Suitable for small businesses to cover capital,
            purchase materials, or expand operations.
          </p>
        </div>

        <div className="loan-card">
          <div className="icon-wrapper">
            <FaLandmark className="loan-icon" />
          </div>
          <h3>Collateral Loan</h3>
          <p>
            Collateral Loan is a long-term loan provided by pledging property
            such as land or assets. Suitable for business establishment, home
            construction, or capital investment. Property is evaluated by a
            certified third party with competitive rates and transparent terms.
          </p>
        </div>
      </section>

      {/* Note Section */}
      <Note type="Loan" />
    </section>
  );
}
