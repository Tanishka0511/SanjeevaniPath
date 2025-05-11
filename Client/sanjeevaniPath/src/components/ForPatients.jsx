import React from "react";
import { FaUserMd, FaFileMedical, FaMoneyCheckAlt } from "react-icons/fa";
import "./ForPatients.css";
import image1 from "../assets/photo-1579684385127-1ef15d508118.avif";

const ForPatients = () => {
  return (
    <section className="fp-section">
      <div className="fp-container">
        <div className="fp-left">
          <div className="fp-header">
            <h2>For Patients</h2>
            <p>
              Get the healthcare you need on your schedule, without the waiting
              room.
            </p>
          </div>

          <div className="fp-grid">
            <div className="fp-card">
              <div className="fp-icon">
                <FaUserMd />
              </div>
              <div>
                <h3>Find and book doctors</h3>
                <p>
                  Browse through our network of qualified healthcare providers
                  and schedule appointments based on availability.
                </p>
              </div>
            </div>

            <div className="fp-card">
              <div className="fp-icon">
                <FaFileMedical />
              </div>
              <div>
                <h3>Share health records securely</h3>
                <p>
                  Upload and share your medical history and records with
                  healthcare providers securely and confidentially.
                </p>
              </div>
            </div>

            <div className="fp-card">
              <div className="fp-icon">
                <FaMoneyCheckAlt />
              </div>
              <div>
                <h3>Prepay for sessions</h3>
                <p>
                  Make payments securely before your consultation to streamline
                  the process and focus on your health.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="fp-right">
          <img
            src={image1}
            alt="Patient using telemedicine app"
            className="fp-image"
          />
        </div>
      </div>
    </section>
  );
};

export default ForPatients;
