// import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './Confirmation.css';
// import image from '../assets/tick.jpg'; 

// const ConfirmationPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { date, time, duration } = location.state || {};

//   useEffect(() => {
//     if (!date || !time || !duration) {
//       // Redirect back if data is missing (user refreshed or came directly)
//       navigate('/redirectToTiming');
//     }
//   }, [date, time, duration, navigate]);

//   return (
//     <div className="booking-container">
//       <div className="booking-card">
//         <img src={image} alt="Booking Confirmed" className="booking-image" />
//         <p className="booking-text">You're booked with SanjeevaniPath.</p>
//         <p className="booking-subtext">An invitation has been emailed to you.</p>
//         <p className="booking-date">{date}</p>
//         <p className="booking-time">{time} ({duration})</p>
//       </div>
//     </div>
//   );
// };

// export default ConfirmationPage;


import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Confirmation.css';
import image from '../assets/tick.jpg';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { date, time, duration } = location.state || {};

  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!date || !time || !duration) {
      navigate('/redirectToTiming');
    }
  }, [date, time, duration, navigate]);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const userMsg = { from: 'user', text: message };
    setChatLog((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/groqQuery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      const botMsg = {
        from: 'bot',
        text: data?.response || 'No response from assistant.',
      };
      setChatLog((prev) => [...prev, botMsg]);
    } catch (err) {
      console.log(err);
      setChatLog((prev) => [
        ...prev,
        { from: 'bot', text: 'Error communicating with server.' },
      ]);
    } finally {
      setLoading(false);
      setMessage('');
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-card">
        <img src={image} alt="Booking Confirmed" className="booking-image" />
        <p className="booking-text">You're booked with SanjeevaniPath.</p>
        <p className="booking-subtext">An invitation has been emailed to you.</p>
        <p className="booking-date">{date}</p>
        <p className="booking-time">
          {time} ({duration})
        </p>
      </div>

      <div className="chat-container">
        <h3 className="chat-title">Need Help? Ask SanjeevaniBot</h3>
        <div className="chat-box">
          {chatLog.map((msg, idx) => (
            <div
              key={idx}
              className={`chat-msg ${msg.from === 'user' ? 'user' : 'bot'}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask something..."
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage} disabled={loading}>
            {loading ? '...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
