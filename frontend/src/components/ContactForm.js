// src/components/ContactForm.js
import React, { useState } from "react";
import "./ContactForm.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import image1 from "../assets/contact.png";
import axios from "axios"; // Import axios for making HTTP requests

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend API endpoint
      await axios.post("http://localhost:5000/api/contact", formData); // Replace with your actual API endpoint

      // Show a success toast when the message is sent
      toast.success("Message sent!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Clear the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      // Show an error toast if the request fails
      toast.error("Failed to send the message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      console.error("Error sending message:", error);
    }
  };

  return (
    <section className="contact-section">
      <ToastContainer />
      <div className="contact-container">
        {/* Left Side: Image */}
        <div className="contact-image">
          <img
            src={image1}
            alt="Illustration"
          />
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-container">
          <h2 className="contact-heading">Get in Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
