import React from "react";
import "./DoctorRegister.css";
import doctorImage from "../assets/WhatsApp Image 2025-05-10 at 19.22.52_9ce8bdc5.jpg"; 
import { useNavigate } from "react-router-dom";

const DoctorRegister = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="doctors-login-container">
      <div className="back-button-wrapper">
        <button className="back-button" onClick={handleBackToHome}>
          ← Back to Home
        </button>
      </div>
      <div className="login-card">
        <div className="form-side">
          <h2>
            Welcome! <br /> SignUp to create your account
          </h2>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Please enter the name." />
            <label>Qualification</label>
            <input type="text" placeholder="Please enter your qualification ." />
            <label>Email</label>
            <input type="email" placeholder="Please enter the your email." />
            <label>Specialization</label>
            <input type="text" placeholder="Please enter your Specialization ."/>
            <label>Password</label>
            <input type="password" placeholder="Enter password to continue." />
             <label>Confirm Password</label>
            <input type="password" placeholder="Enter password again to confirm"/>
            <button type="submit">SignUp</button>
          </form>
        </div>
        <div className="image-side">
          <img src={doctorImage} alt="Doctor" />
          <div className="image-overlay-text">
            Welcome to <br /> <span>SanjeevaniPath</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegister;
