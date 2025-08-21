import React from "react";
import "../styles/OurSchemes.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPiggyBank, 
  faHandHoldingUsd, 
  faGraduationCap 
} from '@fortawesome/free-solid-svg-icons';

export default function OurSchemes() {
  return (
    <section className="our-schemes">
      <div className="container">
        <div className="section-title">
          <h2>Our <span className="highlight">Schemes</span></h2>
          <p>Everything you need to know about our cooperative schemes.</p>
        </div>
        <div className="schemes-grid">
          
          <div className="scheme-card">
            <div className="scheme-icon">
              <FontAwesomeIcon icon={faPiggyBank} />
            </div>
            <h3>Saving Scheme</h3>
            <p>
              A reliable savings plan that helps members secure their future with
              flexible deposit options and competitive returns...
            </p>
            <a href="/schemes/saving" className="read-more">Read More</a>
          </div>

          <div className="scheme-card">
            <div className="scheme-icon">
              <FontAwesomeIcon icon={faHandHoldingUsd} />
            </div>
            <h3>Loan Scheme</h3>
            <p>
              Affordable and accessible loans to support members' personal and 
              business needs, with easy repayment schedules...
            </p>
            <a href="/schemes/loan" className="read-more">Read More</a>
          </div>

          <div className="scheme-card">
            <div className="scheme-icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <h3>Education Scheme</h3>
            <p>
              Special educational support to help members and their families
              achieve academic success without financial barriers...
            </p>
            <a href="/schemes/education" className="read-more">Read More</a>
          </div>

        </div>
      </div>
    </section>
  );
}