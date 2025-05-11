import React, { useState } from "react";
import "./PatientRegister.css";
import loginImage from "../assets/WhatsApp Image 2025-05-10 at 19.19.25_5032489c.jpg";
import { useNavigate } from "react-router-dom";

const PatientRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    password: "",
    confirmPassword: "",
  });

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const password = formData.password.trim();
    const confirmPassword = formData.confirmPassword.trim();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        "https://sanjeevanipath.onrender.com/api/addUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok) {
        alert("User Registed successfully!please confirm to proceed..");
        navigate("/selectCons");
      } else {
        alert(data.message || "Something went wrong.check your email");
      }
    } catch (err) {
      console.error("register error:", err);
      alert("Failed to submit form.");
    }
  };

  return (
    <div className="patient-login-container">
      <div className="login-card">
        <div className="back-button-wrapppat">
          <button className="back-button" onClick={handleBackToHome}>
            ← Back to Home
          </button>
        </div>

        <div className="image-side">
          <img src={loginImage} alt="Doctor and patient" />
          <div className="image-overlay-text">
            Welcome to <br /> <span>SanjeevaniPath</span>
          </div>
        </div>
        <div className="form-side">
          <h2>
            Welcome!
            <br />
            SignUp to create account
          </h2>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Please enter the name."
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Please enter the gmail."
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>phone_no</label>
            <input
              type="tel"
              name="phone_no"
              placeholder="Please enter the phone_no no."
              value={formData.phone_no}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Please enter the password."
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter password again to confirm"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit">SignUp</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientRegister;
