import React from 'react';
import './Hero.css'
import heroImage from '../assets/photo-1576091160550-2173dba999ef.avif'; // Correct image import

export default function Home() {
  return (
    <div className="homepage">
      <main className="main-content">
        <div className="text-section">
          <h1>
            Access Healthcare <br />
            <span>Anytime, Anywhere</span>
          </h1>
          <p>
            Connect with qualified healthcare providers through secure video consultations.
            Get the care you need, when you need it.
          </p>
          <div className="button-group">
            <button className="book">Book Consultation</button>
            <button className="login-register">Login / Register</button>
          </div>
        </div>

        <div className="image-section">
          <img src={heroImage} alt="Healthcare" />
        </div>
      </main>
    </div>
  );
}
