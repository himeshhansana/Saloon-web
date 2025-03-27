import React, { useState } from 'react';
import './App.css'; // Assuming you have some CSS styles in App.css
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('booking'); // 'booking' or 'contact'

  const services = [
    'Haircut & Styling',
    'Coloring',
    'Manicure',
    'Pedicure',
    'Facial',
    'Waxing',
    'Makeup',
    'Massage'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM',
    '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment booked:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      time: '',
      notes: ''
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="salon-contact-page">
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === 'booking' ? 'active' : ''}`}
          onClick={() => setActiveTab('booking')}
        >
          Book Appointment
        </button>
        <button
          className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          General Inquiry
        </button>
      </div>

      <h1>{activeTab === 'booking' ? 'Book Your Appointment' : 'Contact Us'}</h1>

      <div className="contact-container">
        <div className="salon-info">
          <h2>Salon Information</h2>
          <div className="info-card">
            <h3>Glamour Salon</h3>
            <div className="info-item">
              <span>📍</span>
              <p>123 Beauty Street, Paris, FR</p>
            </div>
            <div className="info-item">
              <span>📞</span>
              <p>+1 (234) 567-8900</p>
            </div>
            <div className="info-item">
              <span>🕒</span>
              <p>Open Tue-Sun: 9AM - 7PM</p>
            </div>
          </div>

          <div className="salon-image-placeholder">
            {/* Replace with actual salon image */}
            <div className="image-mock">Salon Interior</div>
          </div>
        </div>

        {activeTab === 'booking' ? (
          <form onSubmit={handleSubmit} className="booking-form">
            <h2>Appointment Details</h2>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="service">Service*</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="date">Date*</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="time">Preferred Time*</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Select a time</option>
                {timeSlots.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="notes">Special Requests</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="3"
                placeholder="Any special instructions for your stylist..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Book Appointment
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Send Us a Message</h2>

            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                placeholder="Your questions or feedback..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        )}

        {submitted && (
          <div className="success-message">
            {activeTab === 'booking'
              ? 'Thank you! Your appointment request has been submitted. We will confirm shortly.'
              : 'Thank you! Your message has been sent.'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;