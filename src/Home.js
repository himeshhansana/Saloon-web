import React from 'react';
import './App.css';
import salonHero from './images/salon-hero.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    const services = [
        { name: 'Hair Styling', icon: '✂️' },
        { name: 'Manicure & Pedicure', icon: '💅' },
        { name: 'Makeup', icon: '💄' },
        { name: 'Facials', icon: '✨' },
        { name: 'Waxing', icon: '🧖' },
        { name: 'Massage', icon: '💆' }
    ];

    return (
        <div className="salon-home">
            {/* Hero Section */}
            <section className="hero" style={{ backgroundImage: `url(${salonHero})` }}>
                <div className="hero-content">
                    <h1>Beauty & Relaxation</h1>
                    <p>Your oasis for premium beauty treatments</p>
                    <Link to="/contact" className="cta-button">Book Now</Link>
                </div>
            </section>

            {/* Services Section */}
            <section className="services">
                <h2>Our Services</h2>
                <div className="service-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.name}</h3>
                            <Link to={`/services#${service.name.toLowerCase().replace(/\s+/g, '-')}`} className="service-link">
                                Learn More →
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <h2>What Our Clients Say</h2>
                <div className="testimonial-cards">
                    <div className="testimonial">
                        <p>"The best salon experience I've ever had!"</p>
                        <span>- Sarah M.</span>
                    </div>
                    <div className="testimonial">
                        <p>"My hair has never looked better. Highly recommend!"</p>
                        <span>- David T.</span>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <h2>Ready for Your Transformation?</h2>
                <Link to="/contact" className="cta-button">Schedule an Appointment</Link>
            </section>
        </div>
    );
};

export default Home;