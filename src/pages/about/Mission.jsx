import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";
import Note from "../../components/Note.jsx";
import "./css/Mission.css";
import "../../global.css";

export default function MissionVision() {
  return (
    <section className="container ">
      <div className="section-title">
        <h2>
          Mission <span className="highlight"> & Vision</span>
        </h2>
        <p className="mv-subtitle">
          Shared Goals, Shared Future – Building prosperity together through
          trust, unity, and innovation.
        </p>
      </div>

      <div className=" mv-cards ">
        <div className="mv-card">
          <FaBullseye className="mv-icon" />
          <h2>Our Mission</h2>
          <p className="mv-intro">
            With the objective of enhancing members&apos; economic
            self-reliance, social prosperity, and collective trust, we are
            committed to:
          </p>
          <ul>
            <li>
              Providing accessible and fair financial services to improve living
              standards.
            </li>
            <li>
              Strengthening cooperative values, unity, and social
              responsibility.
            </li>
            <li>
              Maintaining transparency and accountability for members&apos;
              trust.
            </li>
            <li>Empowering members through technology and training.</li>
          </ul>
        </div>

        <div className="mv-card">
          <FaEye className="mv-icon" />
          <h2>Our Vision</h2>
          <p className="mv-intro">
            To become Nepal’s leading cooperative institution, inspiring
            socio-economic transformation.
          </p>
          <ul>
            <li>Creating lasting prosperity for our members.</li>
            <li>Building an equitable cooperative economy.</li>
            <li>Becoming a nationally recognized model institution.</li>
            <li>Driving sustainable growth through eco-friendly policies.</li>
          </ul>
        </div>

        <div className="mv-card">
          <FaHandshake className="mv-icon" />
          <h2>Our Core Values</h2>
          <p className="mv-intro">
            Trust, Unity, Innovation, and Social Responsibility.
          </p>
          <p className="mv-pledge">
            <em>"Our success lies in the success of our members."</em>
          </p>
        </div>
      </div>

      {/* Note Section */}
      <Note type="MissionVision" />
    </section>
  );
}
