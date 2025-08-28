// src/components/Note.jsx
import React from "react";
import "./css/Note.css";

const notes = {
  Loan: `We prioritize our members’ financial goals and needs, providing reliable and fair loan facilities to strengthen the community. <br/><strong>Note:</strong> For detailed terms, conditions, and required documents, please contact your nearest branch.`,

  Savings: `We prioritize our members’ financial goals and needs, providing reliable and fair savings facilities to strengthen the community. br/><strong>Note:</strong> For detailed terms, conditions, and required documents, please contact your nearest branch.`,

  Download: `We prioritize our members’ financial security, providing transparent and fair insurance options to strengthen the community. <br/><strong>Note:</strong> For detailed terms, conditions, and required documents, please contact your nearest branch.`,

  Contact: `Get in touch with our friendly team for any inquiries or support you may need. <br/><strong>Note:</strong> For detailed terms, conditions, and required documents, please contact your nearest branch.`,

  Career: `Join our team and build a rewarding career in the financial services industry. <br/><strong>Note:</strong> For detailed terms, conditions, and required documents, please contact your nearest branch.`,

  NewsEvents: `Stay updated with the latest news and events happening in our organization. <br/><strong>Note:</strong> For detailed terms, conditions, and required documents, please contact your nearest branch.`,

  RequiredDocuments: `Find information about all the necessary documents required for our services. <br/><strong>Note:</strong> For detailed terms, conditions, and required documents, please contact your nearest branch.`,

  MissionVision: `Learn about our core mission, vision, and values that guide our organization. <br/><strong>Note:</strong> For detailed terms, conditions, and required documents, please contact your nearest branch.`,

  MessageFromChairman: `Read an inspiring message from our chairman about our journey and future. <br/><strong>Note:</strong> For detailed terms, conditions, and required documents, please contact your nearest branch.`,

  Services: `Discover the comprehensive range of financial services we offer to our members. <br/><strong>Note:</strong> For detailed terms, conditions, and required documents, please contact your nearest branch.`,

  About: `Learn more about our history, achievements, and organizational structure. <br/><strong>Note:</strong> For detailed terms, conditions, and required documents, please contact your nearest branch.`,

  Gallery: `Browse through our collection of photos from events and activities. <br/><strong>Note:</strong> For detailed terms, conditions, and required documents, please contact your nearest branch.`,

  AccountingSupervisoryCommittee: `Information about the committee responsible for financial oversight and governance. <br/><strong>Note:</strong> For detailed terms, conditions, and required documents, please contact your nearest branch.`,
};

export default function Note({ type }) {
  const content = notes[type] || "No note available for this section.";
  return (
    <div
      className="loan-note"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
}
