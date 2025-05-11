import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="cu-section">
      <div className="cu-wrapper">
        <div className="cu-header">
          <h2>Contact Us</h2>
          <p>
            Have questions or need assistance? We're here to help. Send us a
            message and we'll respond as soon as possible.
          </p>
        </div>

        <form className="cu-form">
          <div className="cu-form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="cu-form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="abc@example.com"
            />
          </div>

          <div className="cu-form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <button type="submit" className="cu-submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
