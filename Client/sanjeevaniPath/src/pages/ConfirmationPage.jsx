import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Confirmation.css';
import image from '../assets/tick.jpg'; 

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { date, time, duration } = location.state || {};

  useEffect(() => {
    if (!date || !time || !duration) {
      // Redirect back if data is missing (user refreshed or came directly)
      navigate('/redirectToTiming');
    }
  }, [date, time, duration, navigate]);

  return (
    <div className="booking-container">
      <div className="booking-card">
        <img src={image} alt="Booking Confirmed" className="booking-image" />
        <p className="booking-text">You're booked with SanjeevaniPath.</p>
        <p className="booking-subtext">An invitation has been emailed to you.</p>
        <p className="booking-date">{date}</p>
        <p className="booking-time">{time} ({duration})</p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
