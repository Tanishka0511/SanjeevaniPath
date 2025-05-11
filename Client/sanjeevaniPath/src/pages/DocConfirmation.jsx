import React from "react";
import "./DocConfirmation.css";
import { useNavigate } from "react-router-dom";

const DocConfirmation = () => {
  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="registration-container">
        <div className="registration-success">
          <h1>Doctor Registration - Success</h1>
          <p>You have successfully registered as a doctor!</p>
          <div className="success-icon">✔️</div>
        </div>
      </div>
      <div className="back-button-wrapper">
        <button className="back-button" onClick={handleBackToHome}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default DocConfirmation;
