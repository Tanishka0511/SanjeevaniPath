import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
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
            <button className="register">Register</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
