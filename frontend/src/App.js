// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ContactForm from "./components/ContactForm";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import './App.css';
import Footer from "./components/footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

      <HeroSection />
      <FeaturesSection />
      <ContactForm />
      <Footer></Footer>
    </div>
  );
}

export default App;
