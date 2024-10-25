// src/components/HeroSection.js
import React from "react";
import "./HeroSection.css";
import video from "../assets/banner.mp4"

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
      <div className="hero-tagline">
          School ↔ Teachers ↔ Parents
        </div>
        <h1 className="hero-heading">Powering K12 with New-
          <br></br>age SAAS.</h1>
        <div className="hero-buttons">
          <button className="btn-primary">Download the app</button>
          <button className="btn-secondary">Talk to an expert</button>
        </div>
        {/* Video Section */}
        <div className="hero-video">
          <video
            src={video} // Ensure this path matches your video location
            className="video-frame"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
