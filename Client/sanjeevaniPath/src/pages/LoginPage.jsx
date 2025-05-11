
import React from "react";
import "./LoginPage.css";
import doctorImage from "../assets/register.jpg"; 
import { useNavigate,Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="register-login-container">
      <div className="back-button-wrapper">
        <button className="back-button" onClick={handleBackToHome}>
          ← Back to Home
        </button>
      </div>
      <div className="login-card">
        <div className="form-side">
          <h2>
            Welcome to <br /> SanjeevaniPath
          </h2>
          <form>
            <label>Email</label>
            <input type="email" placeholder="Please enter your email." />
            <label>Password</label>
            <input type="password" placeholder="Enter your password." />
            <button type="submit">Login</button>
           <p className="alt-text">
          Don't have an account? <a href="#" className="green-link"><Link to="/register"> Sign up. </Link></a>
        </p>
       
           
          </form>
        </div>
        <div className="image-side">
          <img src={doctorImage} alt="Doctor" />
         
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

