import React from "react";
import Navbar from "../components/Navbar"; // Adjust if path differs
import "./LoginPage.css"; // Ensure CSS file is in the same folder

const LoginPage = () => (
  <div className="main">
    <Navbar />
    <div className="login-container">
      <div className="login-box">
        <h2>For <strong>Doctors</strong></h2>
        <p>Thousands of doctors trust our platform to manage patients,access tools,and stay up-to-date throughout every stage of their medical careers.</p>
        <button className="login-button black">Login</button>
        <p className="alt-text">
          Don't have an account? <a href="#" className="green-link">Sign up.</a>
        </p>
      </div>
      <div className="login-box">
        <h2>For <strong>Patients</strong></h2>
        <p>Thousands of patients rely on our platform to connect with doctors,manage appointments,and access quality healthcare anytime,anywhere.</p>
        <button className="login-button white">Login</button>
        <p className="alt-text">
          Don't have an account? <a href="#" className="green-link">Sign up.</a>
        </p>
      </div>
    </div>
  </div>
);

export default LoginPage;
