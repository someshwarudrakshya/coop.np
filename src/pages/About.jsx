import { FaHistory, FaStar, FaUsers } from "react-icons/fa";
import Note from "../components/Note.jsx";
import "./css/About.css";

export default function History() {
  return (
    <div className="history-page container">
      <div className="section-title ">
        <h2 className="history-title">
          Our <span className="highlight">History</span>
        </h2>
        <p className="history-subtitle">
          The First Steps of a Collective Dream
        </p>
      </div>

      {/* History Timeline / Sections */}
      <div className=" history-sections">
        <div className="history-card">
          <FaHistory className="history-icon" />
          <h2>Beginnings: Magh 1, 2077 (Jan 15, 2021)</h2>
          <p>
            The rise of our cooperative organization is a history born from a
            collective dream, unwavering faith, and the purpose of social
            transformation. Amid the COVID-19 pandemic and lockdown, five
            ordinary citizens initiated this institution with an initial capital
            of Rs. 143,000, aiming to empower communities facing economic
            inequality and social insecurity. Today, this small seed has grown
            to serve over 2,600 members with the support of four dedicated
            employees.
          </p>
        </div>

        {/* Historic Milestones */}
        <div className="history-card ">
          <FaStar className="history-icon" />
          <h2>Historic Moment of 2078 (2021-2022)</h2>
          <p>
            In this year, we secured membership in the National Co-operative
            Bank Ltd. (NCBL), linking us to the national cooperative credit
            system and opening collaboration opportunities with four prestigious
            district and central-level institutions. Under the Access Branding
            Program with NEFSCUN guidance, we prioritized members' needs,
            ensuring transparency, accountability, and modern technology
            integration.
          </p>
        </div>

        {/* Collective Development */}
        <div className="history-card">
          <FaUsers className="history-icon" />
          <h2>Collective Strength at the Heart of Development</h2>
          <p>
            Our foundation rests on members' trust, cooperation, and
            suggestions. We have implemented institutional reforms, scholarship
            programs, and collective investment schemes. Moving forward, we aim
            to increase youth participation and expand women’s empowerment
            initiatives.
          </p>
        </div>

        {/* Unity Mantra */}
        <div className="history-card">
          <FaUsers className="history-icon" />
          <h2>Our Mantra of Unity</h2>
          <p>
            Holding firm to the belief that{" "}
            <em>"the spirit of cooperation is the root of prosperity,"</em>
            we are committed to taking this institution to new heights together.
            Your participation remains our greatest social capital.
          </p>
        </div>
      </div>

      <Note type="About" />
    </div>
  );
}
