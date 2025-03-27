import React from 'react';
import './App.css';
import salonTeam from './images/salon-team.jpg'; // Add your team image
import salonInterior from './images/salon-interior.jpg'; // Add your salon image

const About = () => {
  return (
    <div className="salon-about-page">
      {/* Hero Section */}
      <section
        className="salon-about-hero"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${salonInterior})` }}
      >
        <div className="hero-content">
          <h1>About Our Salon</h1>
          <p>Where beauty meets passion and expertise</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="salon-about-content">
        {/* Our Story */}
        <section className="about-section with-image">
          <div className="text-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2015, Glamour Salon began as a small boutique studio with just two chairs.
              What started as a passion project between two master stylists has blossomed into
              the premier beauty destination in our city.
            </p>
            <p>
              Today, our team of 15 certified professionals serves over 200 clients weekly,
              each receiving our signature blend of luxury and personalized care.
            </p>
          </div>
          <div className="image-content">
            <img src={salonTeam} alt="Our salon team" />
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="about-section philosophy">
          <h2>Our Beauty Philosophy</h2>
          <p className="philosophy-statement">
            "We believe beauty should enhance your natural features, not mask them.
            Our approach combines technical expertise with artistic vision to create
            looks that are as unique as you are."
          </p>
          <div className="signature">
            <p>- Maria Sanchez, Founder & Master Stylist</p>
          </div>
        </section>

        {/* Our Team */}
        <section className="about-section team-section">
          <h2>Meet Our Experts</h2>
          <div className="team-highlights">
            <div className="team-member">
              <div className="member-icon">✂️</div>
              <h3>Master Stylists</h3>
              <p>10+ years experience each</p>
            </div>
            <div className="team-member">
              <div className="member-icon">💅</div>
              <h3>Nail Artists</h3>
              <p>Certified in modern techniques</p>
            </div>
            <div className="team-member">
              <div className="member-icon">💆</div>
              <h3>Spa Specialists</h3>
              <p>Trained in holistic therapies</p>
            </div>
          </div>
        </section>

        {/* Salon Features */}
        <section className="about-section features">
          <h2>Why Choose Us</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Premium Products</h3>
              <p>We use only professional-grade, cruelty-free products</p>
            </div>
            <div className="feature-card">
              <h3>Hygiene First</h3>
              <p>Medical-grade sanitation between every client</p>
            </div>
            <div className="feature-card">
              <h3>Personalized Service</h3>
              <p>Customized treatments for your unique needs</p>
            </div>
            <div className="feature-card">
              <h3>Continuing Education</h3>
              <p>Our team trains monthly on the latest techniques</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;