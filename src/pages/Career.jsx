import Note from "../components/Note.jsx";
import {
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillWave,
} from "react-icons/fa";
import "./css/Career.css";

export default function Career() {
  const job = {
    title: "Marketing Staff",
    location: "Ramdhuni and Itahari Municipality, Koshi Province, Nepal",
    type: "Full-Time",
    salary: "Negotiable",
    description:
      "We are seeking a motivated and dynamic Marketing Staff to join our cooperative team. The role involves promoting our financial services, engaging with members, and supporting the cooperative’s growth through innovative marketing strategies.",
    responsibilities: [
      "Promote cooperative products and services (savings, loans, schemes).",
      "Develop and implement marketing campaigns to attract new members.",
      "Build and maintain strong relationships with existing members.",
      "Assist in organizing promotional events and community outreach programs.",
      "Prepare reports on marketing activities and suggest improvements.",
    ],
    requirements: [
      "Bachelor’s degree in Marketing, Business, or related field (preferred).",
      "Strong communication and interpersonal skills.",
      "Basic knowledge of cooperative principles and financial services.",
      "Ability to work independently and in a team environment.",
      "Proficiency in MS Office and digital marketing tools is a plus.",
    ],
    benefits: [
      "Opportunity to work in a member-focused cooperative organization.",
      "Supportive work environment with growth opportunities.",
      "Negotiable salary based on experience and skills.",
      "Social security benefits as per cooperative policy.",
    ],
  };

  return (
    <div className="container">
      <div className="section-title">
        <h2>
          Join <span className="highlight">Our Team</span>
        </h2>
        <p>
          We are looking for passionate individuals to join our team and
          contribute to our mission of providing excellent financial services to
          our members.
        </p>
      </div>
      <div className="job-card">
        <div className="job-header">
               <h2>{job.title}</h2>
        </div>
        <div className="job-info">
          <p>
            <FaMapMarkerAlt /> <strong>Location:</strong> {job.location}
          </p>
          <p>
            <FaClock /> <strong>Job Type:</strong> {job.type}
          </p>
          <p>
            <FaMoneyBillWave /> <strong>Salary:</strong> {job.salary}
          </p>
        </div>
        <p className="job-description">{job.description}</p>

        <h3>Key Responsibilities</h3>
        <ul>
          {job.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Requirements</h3>
        <ul>
          {job.requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Benefits</h3>
        <ul>
          {job.benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="apply-box">
          <p>
            Interested candidates are requested to send their CV and cover
            letter to:
          </p>
          <a href="mailto:hr@yourcoop.org" className="apply-btn">
            Apply Now
          </a>
        </div>
      </div>

      <Note type="Career" />
    </div>

    
  );
}
