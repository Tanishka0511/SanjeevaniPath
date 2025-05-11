import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './VideoConsulation.css';

export default function VideoLink() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const videoLink = state?.videoLink;

  if (!videoLink) {
    return (
      <div className="consultation-form-container">
        <p>No video link found. Please schedule a consultation.</p>
        <button onClick={() => navigate('/consultation')} className="submit-btn">Go Back</button>
      </div>
    );
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(videoLink);
    alert('Video link copied to clipboard!');
  };

  return (
    <div className="consultation-form-container">
      <h2>Your Video Consultation Link</h2>
      <div className="success-box">
        <p><strong>Join Video Session:</strong></p>
        <a href={videoLink} target="_blank" rel="noreferrer">{videoLink}</a>
        <button onClick={copyToClipboard} className="copy-btn">Copy Link</button>
      </div>
    </div>
  );
}
