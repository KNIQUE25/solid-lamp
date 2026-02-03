// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="techhaven-hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">New arrivals just dropped!</div>
          <h1 className="hero-title">Welcome to TechHaven</h1>
          <p className="hero-description">
            Discover the latest smartphones, tablets, laptops, and 
            desktops from world-renowned brands. Your tech journey starts here.
          </p>
          <div className="hero-buttons">
            <Link to="/shop" className="hero-btn hero-btn-primary">Shop Now</Link>
            <Link to="/shop?deals=true" className="hero-btn hero-btn-secondary">View Deals</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;