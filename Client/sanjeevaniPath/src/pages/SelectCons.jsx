import React from 'react';
import './SelectCons.css';
import { useNavigate } from 'react-router-dom';

const SelectCons = () => {
  const navigate = useNavigate();

  const handleClickChat = () => {
    navigate('/redirectToTiming');
  };
  const handleClickVideo=()=>{
    navigate('/videoCons');
  }

  return (
    <div className="select-consultation-wrapper">
      <div className="select-consultation-card">
        <h2 className="select-title">Start Your Consultation</h2>
        <p className="select-subtitle">
          Choose how you would like to consult with a doctor today:
        </p>
        <div className="select-button-group">
          <button className="select-chat-button" onClick={handleClickChat}>
            💬 Chat with Doctor
          </button>
          <button className="select-video-button" onClick={handleClickVideo}>
            🎥 Video Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectCons;
