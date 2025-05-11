import React from "react";
import { FaRegFileAlt, FaRegClock, FaRegCommentDots } from "react-icons/fa";
import "./ForDoctors.css";
import imag1 from "../assets/photo-1551076805-e1869033e561.avif";

const ForDoctors = () => {
  return (
    <section className="fd-section">
      <div className="fd-container">
        <div className="fd-image-wrapper">
          <img
            src={imag1}
            alt="Doctor using telemedicine app"
            className="fd-image"
          />
        </div>

        <div className="fd-content">
          <h2>For Doctors</h2>
          <p className="fd-subtitle">
            Expand your practice and provide care efficiently from anywhere.
          </p>

          <div className="fd-feature">
            <div className="fd-icon">
              <FaRegFileAlt />
            </div>
            <div>
              <h3>View patient history</h3>
              <p>
                Access comprehensive patient records and medical history for
                informed consultations.
              </p>
            </div>
          </div>

          <div className="fd-feature">
            <div className="fd-icon">
              <FaRegClock />
            </div>
            <div>
              <h3>Get paid before consultations</h3>
              <p>
                Receive payments upfront, eliminating concerns about billing and
                collections.
              </p>
            </div>
          </div>

          <div className="fd-feature">
            <div className="fd-icon">
              <FaRegCommentDots />
            </div>
            <div>
              <h3>Secure chat and consultation notes</h3>
              <p>
                Communicate with patients securely and document consultation
                notes easily within our platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForDoctors;
