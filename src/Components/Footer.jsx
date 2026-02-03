// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="techhaven-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TechHaven</h3>
            <p>Your ultimate destination for cutting-edge technology and premium electronics.</p>
          </div>
          
          <div className="footer-section">
            <h3>Shop</h3>
            <ul>
              <li><Link to="/mobile">Mobile Phones</Link></li>
              <li><Link to="/tablets">Tablets</Link></li>
              <li><Link to="/laptops">Laptops</Link></li>
              <li><Link to="/desktops">Desktops</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/shipping">Shipping Policy</Link></li>
              <li><Link to="/returns">Returns & Exchanges</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Connect</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/press">Press</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 TechHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;