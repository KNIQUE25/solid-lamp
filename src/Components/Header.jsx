// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="techhaven-header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="techhaven-logo">TechHaven</Link>
          
          <nav className="techhaven-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="dropdown">
                <Link to="/shop">Shop</Link>
                <ul className="dropdown-menu">
                  <li><Link to="/mobile">Mobile</Link></li>
                  <li><Link to="/tablets">Tablets</Link></li>
                  <li><Link to="/laptops">Laptops</Link></li>
                  <li><Link to="/desktops">Desktops</Link></li>
                </ul>
              </li>
             
              <li><Link to="/contact">Contact</Link></li> 
            </ul>
          </nav>
          
          <Link to="/signin" className="signin-btn">Sign In</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;