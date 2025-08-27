import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="Footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="products.html">Services</a>
              </li>
              <li>
                <a href="download.html">Download</a>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Schemes</h4>
            <ul>
              <li>
                <a href="#">Savings Accounts</a>
              </li>
              <li>
                <a href="#">Affordable Loans</a>
              </li>
              <li>
                <a href="#">Daily Savings</a>
              </li>
              <li>
                <a href="#">Easy Withdrawals</a>
              </li>
              <li>
                <a href="#">Fast Processing</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Membership</h4>
            <ul>
              <li>
                <a href="#">Benefits</a>
              </li>
              <li>
                <a href="#">How to Join</a>
              </li>
              <li>
                <a href="#">Farmer Resources</a>
              </li>
              <li>
                <a href="#">Training Programs</a>
              </li>
              <li>
                <a href="#">Success Stories</a>
              </li>
            </ul>
          </div>

          <div className="footer-col contact-person">
            <h4>Contact Person</h4>
            <img
              src="/src/assets/contact-person/Sankar.webp"
              alt="Contact Person"
              className="contact-img"
            />
            <h4>शंकर साह</h4>
            <p>सम्पर्क अधिकारी</p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +977-9817377572 <br></br>
              +977-9842146148
            </p>
          </div>
        </div>

        <div className="copyright">
          <p>
            &copy; 2023 Someshwar Rudrakshya Cooperative Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
