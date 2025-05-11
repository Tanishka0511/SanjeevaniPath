import React from "react";
import "./Register.css";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/patient-login");
  };
  const handleLoginClickDoc = () => {
    navigate("/doctor-login");
  };
  const handleBackToHome = () => {
    navigate("/");
  };
  return (
    <div className="main">
      <div className="back-button-wrapper">
        <button className="back-button" onClick={handleBackToHome}>
          ← Back to Home
        </button>
      </div>

      <div className="login-container">
        <div className="login-box">
          <h2>
            For <strong>Doctors</strong>
          </h2>
          <p>
            Thousands of doctors trust our platform to manage patients,access
            tools,and stay up-to-date throughout every stage of their medical
            careers.
          </p>
          <button className="login-button black" onClick={handleLoginClickDoc}>
            Register
          </button>
          <p className="alt-text">
            Already have an account?{" "}
            <a href="#" className="green-link">
              <Link to="/login"> Login </Link>
            </a>
          </p>
        </div>
        <div className="login-box">
          <h2>
            For <strong>Patients</strong>
          </h2>
          <p>
            Thousands of patients rely on our platform to connect with
            doctors,manage appointments,and access quality healthcare
            anytime,anywhere.
          </p>
          <button className="login-button white" onClick={handleLoginClick}>
            Register
          </button>
          <p className="alt-text">
            Already have an account?{" "}
            <a href="#" className="green-link">
              <Link to="/login"> Login </Link>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
