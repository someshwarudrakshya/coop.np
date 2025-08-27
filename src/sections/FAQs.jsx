import { useState } from "react";
import "./css/FAQs.css";

export default function Faqs() {
  const faqData = [
    {
      question: "What is a cooperative?",
      answer:
        "A cooperative is a member-owned and democratically controlled enterprise that operates for the benefit of its members. Unlike traditional companies, cooperatives follow seven internationally recognized principles that emphasize democratic control, member economic participation, and concern for community.",
    },
    {
      question: "How do I become a member?",
      answer:
        "To become a member, you simply need to complete a membership application, pay a small membership share (typically ₹500-1000), and maintain a small balance in your share account. There are no credit checks or income requirements.",
    },
    {
      question: "What are membership benefits?",
      answer:
        "Members enjoy voting rights (one member, one vote), access to all cooperative services, potential patronage refunds based on participation, financial education opportunities, and the satisfaction of supporting a community-focused organization.",
    },
    {
      question: "How is a cooperative different from a bank?",
      answer:
        "Cooperatives are owned by their members rather than outside shareholders. Profits are either reinvested in the cooperative or returned to members. Decision-making is democratic (one member, one vote) rather than based on share ownership.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-container" id="faq">
      <div className="section-title">
        <h2>
          Frequently <span className="highlight">Asked Questions</span>
        </h2>
        <p>Everything you need to know about our cooperative</p>
      </div>

      <div className="faq-columns">
        {/* Left column - questions (and mobile answers) */}
        <div className="faq-questions">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
              </div>
              {/* Mobile answer - hidden on desktop */}
              <div
                className={`faq-answer mobile-only ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right column - desktop answers - hidden on mobile */}
        <div className="faq-answers desktop-only">
          {faqData[activeIndex] && (
            <div className="faq-answer active">
              <p>{faqData[activeIndex].answer}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
