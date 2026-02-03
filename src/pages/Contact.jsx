// src/pages/Contact.jsx
import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const socialMedia = [
    {
      name: 'Facebook',
      icon: 'bx bxl-facebook',
      username: '@TechHavenOfficial',
      url: 'https://facebook.com',
      color: 'facebook'
    },
    {
      name: 'Twitter',
      icon: 'bx bxl-twitter',
      username: '@TechHaven',
      url: 'https://twitter.com',
      color: 'twitter'
    },
    {
      name: 'Instagram',
      icon: 'bx bxl-instagram',
      username: '@TechHaven_Official',
      url: 'https://instagram.com',
      color: 'instagram'
    },
    {
      name: 'LinkedIn',
      icon: 'bx bxl-linkedin',
      username: 'TechHaven',
      url: 'https://linkedin.com',
      color: 'linkedin'
    },
    {
      name: 'YouTube',
      icon: 'bx bxl-youtube',
      username: 'TechHaven TV',
      url: 'https://youtube.com',
      color: 'youtube'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', time: '11:00 AM - 5:00 PM' },
    { day: 'Holidays', time: 'Closed' }
  ];

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            Have questions? We're here to help. Contact us through any of the channels below.
          </p>
        </div>

        <div className="contact-content">
          {/* Left Column: Contact Form */}
          <div className="contact-form-container">
            <div className="contact-form">
              <h2>
                <i className='bx bx-message-dots'></i> Send us a Message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    required
                  />
                </div>

                <button type="submit" className="btn-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Contact Info, Map, Social Media */}
          <div className="contact-info-container">
            {/* Contact Information */}
            <div className="info-card">
              <h3><i className='bx bx-map'></i> Contact Information</h3>
              <div className="info-item">
                <div className="info-icon">
                  <i className='bx bx-map'></i>
                </div>
                <div className="info-content">
                  <h4>Our Location</h4>
                  <p>123 Tech Street, Silicon Valley<br />San Francisco, CA 94107</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className='bx bx-phone'></i>
                </div>
                <div className="info-content">
                  <h4>Phone Number</h4>
                  <p>+1 (555) 123-4567<br />Mon-Fri from 9am to 8pm</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className='bx bx-envelope'></i>
                </div>
                <div className="info-content">
                  <h4>Email Address</h4>
                  <p>support@techhaven.com<br />sales@techhaven.com</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="map-container">
              <h3><i className='bx bx-map-alt'></i> Find Us</h3>
              <div className="map-placeholder">
                <i className='bx bx-map'></i>
                <p>Google Maps Integration</p>
                <button className="map-btn" onClick={() => window.open('https://maps.google.com', '_blank')}>
                  Open in Google Maps
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="social-media-container">
              <h3><i className='bx bx-share-alt'></i> Connect With Us</h3>
              <div className="social-media-grid">
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-item ${social.color}`}
                  >
                    <div className="social-icon">
                      <i className={social.icon}></i>
                    </div>
                    <div className="social-content">
                      <h4>{social.name}</h4>
                      <p>{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="info-card">
              <h3><i className='bx bx-time'></i> Business Hours</h3>
              <ul className="hours-list">
                {businessHours.map((item, index) => (
                  <li key={index}>
                    <span className="day">{item.day}</span>
                    <span className="time">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;