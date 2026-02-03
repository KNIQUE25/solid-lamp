// src/pages/SignIn.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Signing in with:', { email, password });
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <div className="signin-form">
          <h2 className="signin-title">Welcome Back</h2>
          <p className="signin-subtitle">Sign in to your TechHaven account</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            
            <button type="submit" className="btn-signin">
              Sign In
            </button>
          </form>
          
          <div className="signin-footer">
            <p>
              Don't have an account?{' '}
              <Link to="/signup">Create Account</Link>
            </p>
            <p>
              <Link to="/forgot-password">Forgot Password?</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;