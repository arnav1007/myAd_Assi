// src/components/Footer.js
import React from "react";
import "./footer.css";
import logo from "../assets/logo.png"; // Adjust the path based on where your logo is stored
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Contact</h3>
        <p>Work inquiries: Myed.live@gmail.com</p>
        <p>Careers: Careers@myed.live</p>
        <p>© 2024 MyEd. All Rights Reserved.</p>
      </div>
      <div className="footer-column">
        <h3>Address</h3>
        <p>MyEd Pvt. Ltd.</p>
        <p>Tides Incubator,</p>
        <p>IIT Roorkee</p>
      </div>
      <div className="footer-column">
        <h3>Social</h3>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-logo">
        <img src={logo} alt="MyEd Logo" />
        <p>MyEd</p>
      </div>
    </footer>
  );
};

export default Footer;
