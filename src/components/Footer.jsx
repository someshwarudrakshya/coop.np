import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="products.html">Products</a>
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
            <h3>Products</h3>
            <ul>
              <li>
                <a href="#">Rudraksha Beads</a>
              </li>
              <li>
                <a href="#">Rudraksha Malas</a>
              </li>
              <li>
                <a href="#">Saplings</a>
              </li>
              <li>
                <a href="#">Ayurvedic Products</a>
              </li>
              <li>
                <a href="#">Custom Orders</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Membership</h3>
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
            <h3>Contact Person</h3>
            <img
              src="./contact-person/sankar.webp"
              alt="Contact Person"
              className="contact-img"
            />
            <h3>शंकर साह</h3>
            <p>सम्पर्क अधिकारी</p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +977-9817377572
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
