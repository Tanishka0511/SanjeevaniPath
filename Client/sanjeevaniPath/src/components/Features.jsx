import React from "react";
import "./Features.css"
import { FaCalendarAlt, FaUserMd, FaLock, FaComments, FaFileAlt, FaHistory } from "react-icons/fa";

const features = [
  {
    title: "Online Consultation Booking",
    description: "Schedule appointments with healthcare providers at your convenience, 24/7.",
    icon: <FaCalendarAlt />,
  },
  {
    title: "Secure Patient Registration",
    description: "Create your medical profile with confidence using our HIPAA-compliant platform.",
    icon: <FaUserMd />,
  },
  {
    title: "Encrypted Payment System",
    description: "Pay for your consultations securely using our integrated payment processing.",
    icon: <FaLock />,
  },
  {
    title: "Real-time Chat with Doctors",
    description: "Communicate directly with healthcare providers through our secure messaging system.",
    icon: <FaComments />,
  },
  {
    title: "Consultation Transcription",
    description: "Automatically convert your consultation audio to text for easy reference.",
    icon: <FaFileAlt />,
  },
  {
    title: "Medical History Access",
    description: "Store and access your medical records securely in one convenient location.",
    icon: <FaHistory />,
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2>Services We Provide</h2>
          <p>
            Our platform offers a comprehensive set of features designed to make healthcare accessible,
            secure, and convenient for everyone.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
