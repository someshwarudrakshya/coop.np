import { useState } from "react";
import {
  FaChild,
  FaFemale,
  FaCoins,
  FaBox,
  FaRegCalendarCheck,
  FaBriefcase,
  FaRegMoneyBillAlt,
} from "react-icons/fa";
import "./css/Savings.css";
import Note from "../../components/Note.jsx";

export default function SavingsOverview() {
  const [activeTab, setActiveTab] = useState("current");

  const currentAccounts = [
    {
      icon: <FaBriefcase />,
      title: "Business Savings Account (व्यावसायिक बचत खाता)",
      desc: "Helps micro, small, and medium businesses manage income-expenses, save capital, and access loan facilities. High flexibility for deposits and withdrawals.",
    },
    {
      icon: <FaCoins />,
      title: "Regular Savings Account (साधारण बचत खाता)",
      desc: "Basic account for daily savings. Minimum balance required, easy deposits and withdrawals. Designed to promote safe savings culture.",
    },
    {
      icon: <FaRegMoneyBillAlt />,
      title: "Special Savings Account (विशिष्ट बचत खाता)",
      desc: "Goal-based account for specific objectives. Offers higher interest or bonuses compared to regular savings.",
    },
  ];

  const periodicAccounts = [
    {
      icon: <FaRegCalendarCheck />,
      title: "Periodic Savings Account (आवधिक बचत खाता)",
      desc: "Deposit lump sum for a fixed term (6 months to 6 years) and earn higher interest. Ideal for long-term savings or special goals like education or house construction.",
    },
    {
      icon: <FaChild />,
      title: "Child Savings Account (बाल बचत खाता)",
      desc: "Managed by parents/guardians for children under 18. Encourages savings habits and financial literacy. Withdrawals after 18 years.",
    },
    {
      icon: <FaFemale />,
      title: "Women Savings Account (महिला बचत खाता)",
      desc: "Promotes women’s economic empowerment. Easy access to savings and loan facilities.",
    },
    {
      icon: <FaCoins />,
      title: "Regular Savings Account (नियमित बचत खाता)",
      desc: "Deposit a fixed amount regularly. Financial discipline, loan eligibility, penalties for non-compliance.",
    },
    {
      icon: <FaBox />,
      title: "Piggy Bank / Khutruk Savings (खुत्रुके बचत खाता)",
      desc: "For children to save small amounts. Piggy bank provided by institution, later transferred to child savings account.",
    },
    {
      icon: <FaRegCalendarCheck />,
      title: "Cumulative / Sequential Savings (क्रमिक बचत खाता)",
      desc: "Regular savings daily/monthly for 3 months to 6 years. Priority for loans and emergency funds. Funds returned with interest at maturity.",
    },
  ];

  const savingAccounts = [
    {
      icon: <FaChild />,
      title: "Child Savings Account (बाल बचत खाता)",
      desc: "For minors under 18, managed by parents/guardians. Encourages saving habits and financial literacy. Withdrawals allowed after 18. Special birthday gifts, higher interest or bonuses.",
    },
    {
      icon: <FaFemale />,
      title: "Women Savings Account (महिला बचत खाता)",
      desc: "Designed for women's economic empowerment. Enables women to save for personal or business goals and access loan facilities easily.",
    },
    {
      icon: <FaCoins />,
      title: "Regular Savings Account (नियमित बचत खाता)",
      desc: "Members deposit a fixed amount regularly. Ensures financial discipline and eligibility for preferential loans. Non-compliance may lead to penalties or restricted loan access.",
    },
    {
      icon: <FaBox />,
      title: "Piggy Bank / Khutruk Savings (खुत्रुके बचत खाता)",
      desc: "Encourages children to save from an early age using colorful piggy banks. Funds later transferred to child savings account.",
    },
    {
      icon: <FaRegCalendarCheck />,
      title: "Cumulative / Sequential Savings (क्रमिक बचत खाता)",
      desc: "Members save regularly (daily/monthly) for a fixed term: 3 months, 6 months, 1 year, 2 years, 3 years, 5 years, 6 years. Provides interest benefits, loan priority, and supports emergency or goal-based savings. Funds returned with interest at maturity.",
    },
  ];

  const renderAccounts = (accounts) => {
    return accounts.map((acc, idx) => (
      <div className="saving-card" key={idx}>
        <div className="saving-icon">{acc.icon}</div>
        <h2>{acc.title}</h2>
        <p>{acc.desc}</p>
      </div>
    ));
  };

  return (
    <div className="savings-overview-page container">
      <div className="section-title">
        <h2>
          Savings Facilities <span className="highlight">for Members</span>
        </h2>
        <p className="loan-subtitle">
          Reliable and secure savings options to meet your personal and business needs.
        </p>
      </div>
      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "current" ? "active" : ""}
          onClick={() => setActiveTab("current")}
        >
          Current Accounts
        </button>
        <button
          className={activeTab === "periodic" ? "active" : ""}
          onClick={() => setActiveTab("periodic")}
        >
          Periodic Accounts
        </button>
        <button
          className={activeTab === "saving" ? "active" : ""}
          onClick={() => setActiveTab("saving")}
        >
          Savings Accounts
        </button>
      </div>

      {/* Accounts List */}
      <div className="accounts-grid">
        {activeTab === "current" && renderAccounts(currentAccounts)}
        {activeTab === "periodic" && renderAccounts(periodicAccounts)}
        {activeTab === "saving" && renderAccounts(savingAccounts)}
      </div>

      {/* Note Section */}
      <Note type="Savings" />
    </div>
  );
}
