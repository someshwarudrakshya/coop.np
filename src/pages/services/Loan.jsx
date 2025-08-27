import { FaShieldAlt, FaBriefcase, FaLandmark } from "react-icons/fa";
import "./css/Loan.css";

export default function Loan() {
  return (
    <div className="loan-page container">
      {/* Hero Section */}
        <div className="loan-hero-content ">
          <div className="section-title">
          <h2 className="loan-title">
            Loan Facilities <span className="highlight">for Members</span>
          </h2>
          <p className="loan-subtitle">
            Reliable and secure financial support to meet your personal and business needs.
          </p>
          </div>
        </div>

        {/* Safe Loan */}
        <div className="loan-card">
          <FaShieldAlt className="loan-icon" />
          <h2>Safe Loan (सी. लोन)</h2>
          <p>
            Safe Loan is provided securely based on the amount deposited in members’ savings accounts.
            Depending on savings and repayment capacity, 50% to 90% of the deposited amount can be lent
            through a simple process. It offers lower interest rates than standard loans and is designed
            to support members in emergencies or short-term investment needs. Terms and conditions apply.
          </p>
        </div>

        {/* Business Loan */}
        <div className="loan-card">
          <FaBriefcase className="loan-icon" />
          <h2>Business Loan (व्यावसायिक ऋण)</h2>
          <p>
            Business Loan is provided based on the member’s saved amount using a loan multiplier (typically
            2–3 times the savings) with the savings as collateral. The maximum term is one year with a limit
            (e.g., up to NPR 200,000). This facility is suitable for small to medium businesses to cover
            capital needs, purchase materials, or expand operations. Standard interest rates and institutional
            policies apply.
          </p>
        </div>

        {/* Collateral Loan */}
        <div className="loan-card">
          <FaLandmark className="loan-icon" />
          <h2>Collateral Loan (धितो ऋण)</h2>
          <p>
            Collateral Loan is a long-term loan provided by pledging property such as land or other fixed assets.
            Suitable for major financial requirements such as business establishment, home construction, or
            capital investment. Property evaluation is conducted by a certified third party, and loan limits
            are set according to institutional policies. Competitive interest rates and transparent terms apply.
          </p>
        </div>

        {/* Note */}
        <div className="loan-note">
          <p>
            We prioritize our members’ financial goals and needs, providing reliable and fair loan facilities
            to strengthen the community. <br />
            <strong>Note:</strong> For detailed terms, conditions, and required documents, please contact your
            nearest branch.
          </p>
        </div>


    </div>
  );
}
