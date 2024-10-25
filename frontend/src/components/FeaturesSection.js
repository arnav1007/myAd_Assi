// src/components/FeaturesSection.js
import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const features = [
    {
      title: "Interactive Learning Experiences",
      description: "Dive into immersive multimedia courses that bring concepts to life, making learning both engaging and effective.",
      icon: "🧑‍🏫",
    },
    {
      title: "AI-Driven Personalized Assessments",
      description: "Receive instant feedback and tailored assessments powered by AI, ensuring each learner progresses at their own pace.",
      icon: "🤖",
    },
    {
      title: "Adaptive Learning Paths",
      description: "Enjoy a customized learning journey that adapts to your strengths and weaknesses, guiding you to success.",
      icon: "🔄",
    },
    {
      title: "Comprehensive Progress Analytics",
      description: "Track your achievements with real-time analytics, helping educators and students make informed decisions.",
      icon: "📊",
    },
  ];

  return (
    <section className="features">
      <h2 className="features-heading">Features that Empower Your Learning Journey</h2>
      <p className="features-subheading">
        Discover the powerful tools and innovative technology designed to transform the way you learn and grow.
      </p>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
