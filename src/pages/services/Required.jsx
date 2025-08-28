import Note from "../../components/Note.jsx";
import "./css/Required.css";

export default function RequiredDocs() {
  return (
    <div className="container">
      <div className="section-title">
        <h2 className="page-title">
          Required <span className="highlight">Documents</span>
        </h2>
        <p className="section-subtitle">
          Please provide the following documents:
        </p>
      </div>

      {/* Membership Section */}
      <section className="docs-section">
        <h2 className="required-title">To Become a Member</h2>
        <p className="required-subtitle">Docs needed to register as a cooperative member in Nepal:</p>
        <ul className="docs-list">
          <li>Copy of Nepali Citizenship Certificate</li>
          <li>Two recent passport-sized photographs</li>
          <li>Completed membership application form</li>
          <li>Payment of prescribed membership fee</li>
          <li>Investment in the cooperative's share capital</li>
          <li>Nominee details</li>
          <li>Preliminary meeting minutes (if applicable)</li>
        </ul>
      </section>

      {/* Loan Section */}
      <section className="docs-section">
        <h2 className="required-title">To Apply for a Loan</h2>
        <p className="required-subtitle">Docs required to apply for a loan from the cooperative:</p>
        <ul className="docs-list">
          <li>Copy of Nepali Citizenship Certificate</li>
          <li>Two recent passport-sized photographs</li>
          <li>Completed loan application form</li>
          <li>Income proof (Salary slip or tax clearance certificate)</li>
          <li>
            Collateral docs (Land ownership certificate, Blueprint,
            Charkilla, etc.)
          </li>
          <li>Latest tax clearance receipt or land revenue receipt (Malpot)</li>
          <li>Business registration certificate (if applicable)</li>
          <li>Board resolution approving the loan</li>
          <li>Guarantor details (if required)</li>
          <li>PAN card for loans above NPR 50 lakh</li>
        </ul>
      </section>
      
   {/* Note Section */}
      <Note type="RequiredDocuments" />
    </div>
  );
}
