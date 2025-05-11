import React, { useState } from "react";
import "./DoctorRegister.css";
import doctorImage from "../assets/WhatsApp Image 2025-05-10 at 19.22.52_9ce8bdc5.jpg"; 
import { useNavigate } from "react-router-dom";

const DoctorRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    qualification: "",
    email: "",
    speciality: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Optional: More validation checks for fields like email
    if (!formData.name || !formData.qualification || !formData.email || !formData.speciality) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/addDoctor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok) {
        alert("Doctor Registered successfully!");
        
        // Reset form after successful submission
        setFormData({
          name: "",
          qualification: "",
          email: "",
          speciality: "",
          password: "",
          confirmPassword: "",
        });
        
        navigate("/confirmDoc");
      } else {
        alert(data.message || "Something went wrong. Please check your email.");
      }

    } catch (err) {
      console.error("Registration error:", err);
      alert("Failed to submit form.");
    }
  };

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
            <label>Qualification</label>
            <input 
              type="text" 
              name="qualification" 
              placeholder="Please enter your qualification."
              value={formData.qualification}
              onChange={handleChange}
              required 
            />
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Please enter your email."
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <label>Speciality</label>
            <input 
              type="text" 
              name="speciality" 
              placeholder="Please enter your speciality."
              value={formData.speciality}
              onChange={handleChange}
              required 
            />
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Enter password to continue."
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
