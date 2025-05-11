import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate=useNavigate();
  const handleRegisterClick=()=>{
    navigate("/register")
  }
  return (
    <header className="navbar">
      <div className="logo">SanjeevaniPath</div>
      <nav>
        <ul>
          <li><a href="#Hero">Home</a></li>
          <li><a href="#AboutUs">About</a></li>
          <li><a href="#features">Services</a></li>
          <li><a href="#ContactUs">ContactUs</a></li>
          
          <li>
            <Link to="/login" className="login">Login</Link>
          </li>
          <li>
            <button onClick={handleRegisterClick} className="register">Register</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
