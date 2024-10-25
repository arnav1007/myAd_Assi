// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img
            src={logo} // Replace with the correct path to your logo
            alt="MyEd Logo"
            className="logo"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="navbar-links">
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/about-us" className="nav-link">About us</Link>
        </nav>

        {/* Call-to-action Buttons */}
        <div className="navbar-buttons">
          <button className="btn-primary">Download the app</button>
          <button className="btn-secondary">Talk to an expert</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
