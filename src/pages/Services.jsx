import Note from "../components/Note.jsx";
import {
  FaPiggyBank,
  FaHandHoldingUsd,
  FaCalendarDay,
  FaMoneyBillWave,
  FaBolt,
} from "react-icons/fa";
import "./css/Services.css";

export default function Services() {
  const services = [
    {
      icon: <FaPiggyBank />,
      title: "Savings Accounts",
      description:
        "We provide secure and reliable savings accounts that help members build financial stability for the future. With attractive interest rates and flexible options, you can grow your wealth safely with us.",
    },
    {
      icon: <FaHandHoldingUsd />,
      title: "Affordable Loans",
      description:
        "Our cooperative offers low-interest loans with flexible repayment options. Whether it’s for personal, business, or emergency needs, we ensure loans are accessible and member-friendly.",
    },
    {
      icon: <FaCalendarDay />,
      title: "Daily Savings",
      description:
        "Encouraging financial discipline, our daily savings scheme allows members to deposit small amounts regularly, ensuring gradual but steady financial growth.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Easy Withdrawals",
      description:
        "We believe in easy access to your money. Members can withdraw their savings quickly and conveniently whenever they need them without unnecessary delays.",
    },
    {
      icon: <FaBolt />,
      title: "Fast Processing",
      description:
        "Our cooperative ensures quick approval and processing of financial requests. From loans to withdrawals, we focus on efficiency and speed to serve you better.",
    },
  ];

  return (
    <div className="container">
      <div className="section-title">
        <h2>
          Our <span className="highlight"> Services</span>
        </h2>

        <p>
          Discover a range of financial services designed to empower our members
          and promote economic growth.
        </p>
      </div>
      {services.map((service, index) => (
        <section
          className={`service-section ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
        >
          <div className="service-icon">{service.icon}</div>
          <div className="service-content">
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        </section>
      ))}

        <Note type="Services" />
    </div>
  );
}
