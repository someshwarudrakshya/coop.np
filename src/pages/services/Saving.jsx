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
      title: "Business Savings Account",
      desc: "Helps micro, small, and medium businesses manage income-expenses, save capital, and access loan facilities. High flexibility for deposits and withdrawals.",
    },
    {
      icon: <FaCoins />,
      title: "Regular Savings Account",
      desc: "Basic account for daily savings. Minimum balance required, easy deposits and withdrawals. Designed to promote safe savings culture.",
    },
    {
      icon: <FaRegMoneyBillAlt />,
      title: "Special Savings Account ",
      desc: "Goal-based account for specific objectives. Offers higher interest or bonuses compared to regular savings.",
    },
  ];

  const periodicAccounts = [
    {
      icon: <FaRegCalendarCheck />,
      title: "Periodic Savings Account",
      desc: "Deposit lump sum for a fixed term (6 months to 6 years) and earn higher interest. Ideal for long-term savings or special goals like education or house construction.",
    },
  ];

  const savingAccounts = [
    {
      icon: <FaChild />,
      title: "Children Savings Account",
      desc: "For minors under 18, managed by parents/guardians. Encourages saving habits and financial literacy. Withdrawals allowed after 18. Special birthday gifts, higher interest or bonuses.",
    },
    {
      icon: <FaFemale />,
      title: "Women Savings Account",
      desc: "Designed for women's economic empowerment. Enables women to save for personal or business goals and access loan facilities easily.",
    },
    {
      icon: <FaCoins />,
      title: "Regular Savings Account",
      desc: "Members deposit a fixed amount regularly. Ensures financial discipline and eligibility for preferential loans. Non-compliance may lead to penalties or restricted loan access.",
    },
    {
      icon: <FaBox />,
      title: "Piggy Bank / Khutruk Savings Account",
      desc: "Encourages children to save from an early age using colorful piggy banks. Funds later transferred to child savings account.",
    },
    {
      icon: <FaRegCalendarCheck />,
      title: "Daily Savings Account",
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
          Reliable and secure savings options to meet your personal and business
          needs.
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
