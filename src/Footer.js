import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  const services = [
    'Hair Styling',
    'Hair Coloring',
    'Manicure & Pedicure',
    'Facials',
    'Waxing',
    'Makeup',
    'Massage'
  ];

  return (
    <footer className="salon-footer">
      <div className="footer-container">
        {/* About Salon */}
        <div className="footer-section">
          <h3>Glamour Salon</h3>
          <p>Your premier destination for beauty and relaxation. We specialize in making you look and feel your best with our expert services.</p>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            {services.map((service, index) => (
              <li key={index}><Link to={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}>{service}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt className="icon" />
              <span>123 Beauty Street, Paris, FR</span>
            </li>
            <li>
              <FaPhone className="icon" />
              <span>+1 (234) 567-8900</span>
            </li>
            <li>
              <FaEnvelope className="icon" />
              <span>info@glamoursalon.com</span>
            </li>
            <li>
              <FaClock className="icon" />
              <span>Open Tue-Sun: 9AM - 7PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Glamour Salon. All Rights Reserved.</p>
        <div className="legal-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;