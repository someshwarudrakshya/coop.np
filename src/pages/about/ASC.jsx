import React from "react";
import Umesh from "../../assets/accounting/Umesh.jpg";
import Rita from "../../assets/accounting/Rita.jpg";
import noFace from "../../assets/noFace.jpg";

import "./css/Committee.css";
import "./css/ASC.css";

export default function AccountingSupervisoryCommittee() {
  const members = [
    { name: "Mr. Umesh Bhujel", role: "Coordinator", img: Umesh },
    { name: "Mrs. Rita Magar", role: "Member", img: Rita },
    { name: "Mr. Pawan Kumar Pajiyar", role: "Member", img: noFace },
  ];

  return (
    <div className="fluid-background">
      <div className="container">
        <section className="section">
          <div className="section-title">
            <h2>
              Audit <span className="highlight">Supervisory Committee</span>
            </h2>
            <p className="section-subtitle">
              Ensuring financial integrity and compliance
            </p>
          </div>

          <div className="members-grid">
            {members.map((m) => (
              <article
                key={m.name}
                className="member-card small-card"
                aria-label={`${m.name} — ${m.role}`}
                tabIndex="0"
              >
                <div className="member-image-container">
                  <img
                    src={m.img}
                    alt={`${m.name} — ${m.role}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="member-info">
                  <h3 className="member-name">{m.name}</h3>
                  <p className="member-role">{m.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
