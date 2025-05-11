import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoConsulation.css';

export default function VideoConsulation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Patient: '',
    Doctor: '',
    speciality: '',
    symptoms: '',
    status: 'scheduled',
    information: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/addConsultant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const res = await response.json();

      if (res.success) {
        alert(res.message);
        navigate('/video-link', { state: { videoLink: res.consultation.videoSessionLink } });
      } else {
        alert('Failed to schedule consultation.');
      }
    } catch (error) {
      alert('An error occurred while submitting the form.');
      console.error(error);
    }
  };

  return (
    <div className="consultation-form-container">
      <h2>Schedule a Consultation</h2>
      <form onSubmit={handleSubmit}>
        <label>Patient ID:</label>
        <input type="text" name="Patient" value={formData.Patient} onChange={handleChange} required />

        <label>Doctor ID:</label>
        <input type="text" name="Doctor" value={formData.Doctor} onChange={handleChange} required />

        <label>Speciality:</label>
        <input type="text" name="speciality" value={formData.speciality} onChange={handleChange} required />

        <label>Symptoms:</label>
        <textarea name="symptoms" value={formData.symptoms} onChange={handleChange} required />

        <label>Status:</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="scheduled">Scheduled</option>
          <option value="completed">Completed</option>
        </select>

        <label>Additional Information:</label>
        <textarea name="information" value={formData.information} onChange={handleChange} />

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
