import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './RedirectToTiming.css';
import { useNavigate } from 'react-router-dom';
import {
  addMinutes,
  format,
  startOfDay,
  endOfDay,
  isBefore
} from 'date-fns';

const generateTimeSlots = (date) => {
  const slots = [];
  const now = new Date();
  let start = date.toDateString() === now.toDateString() ? new Date() : startOfDay(date);
  const end = endOfDay(date);

  start.setSeconds(0);
  start.setMilliseconds(0);
  start = addMinutes(start, 30 - (start.getMinutes() % 30));

  while (isBefore(start, end)) {
    slots.push(format(start, 'hh:mm a'));
    start = addMinutes(start, 30);
  }

  return slots;
};

const RedirectToTiming = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [slots, setSlots] = useState([]);
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    setSlots(generateTimeSlots(selectedDate));
  }, [selectedDate]);

  const handleRegister = () => {
    navigate('/confirmPage', {
       state: {
    date: format(selectedDate, 'MMMM d, yyyy'),
    time: selectedTime,
    duration: selectedDuration
  }
    });
  };

  return (
    <div className="booking-container">
       <h1 className="page-heading">Select Consultation <br />Time </h1>
      <div className="full">
      <div className="calendar-container">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          calendarType="gregory"
          locale="en-US"
          minDate={new Date()}
        />
      </div>

      <div className="time-selection">
        <h4>How long do you need?</h4>
        <div className="duration-options">
          <button
            className={selectedDuration === '30 mins' ? 'active' : ''}
            onClick={() => setSelectedDuration('30 mins')}
          >
            30 mins
          </button>
          <button
            className={selectedDuration === '1 hour' ? 'active' : ''}
            onClick={() => setSelectedDuration('1 hour')}
          >
            1 hour
          </button>
        </div>
        <u></u>
        <h4>What time works best?</h4>
        <p>
          Showing times for <strong>{format(selectedDate, 'MMMM d, yyyy')}</strong>
        </p>
        <div className="slot-list">
          {slots.map((slot, idx) => (
            <button
              key={idx}
              className={`time-slot ${selectedTime === slot ? 'active' : ''}`}
              onClick={() => setSelectedTime(slot)}
            >
              {slot}
            </button>
          ))}
        </div>

        <button
          className="register-btn"
          disabled={!selectedDuration || !selectedTime}
          onClick={handleRegister}
        >
          Book
        </button>
      </div>
      </div>
    </div>
  );
};

export default RedirectToTiming;
