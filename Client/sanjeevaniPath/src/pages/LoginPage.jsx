import React, { useState } from "react";
import "./LoginPage.css";
import doctorImage from "../assets/register.jpg";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log("Login Response:", data);

      if (res.ok) {
        alert("Login successful!");
        navigate("/selectCons");
      } else {
        alert(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <div className="register-login-container">
      <div className="login-card">
        <div className="form-side">
      <div className="back-button-wrappLogin">
        <button className="back-buttonn" onClick={handleBackToHome}>
          ← Back to Home
        </button>
      </div>
      
          <h2>
            Welcome to <br /> SanjeevaniPath
          </h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Please enter your email."
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password."
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
            <p className="alt-text">
              Don't have an account?{" "}
              <Link to="/register" className="green-link">Sign up.</Link>
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
