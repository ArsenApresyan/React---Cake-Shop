import React from 'react';
import { Link } from 'react-router-dom';
import './FooterBanner.css';

const FooterBanner = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription submitted');
  };

  return (
    <div className="footer-banner-wrapper">
      <div className="footer-banner-overlay"></div>
      <div className="footer-banner-content">
        <h2 className="footer-banner-title">GET UPDATE</h2>
        <p className="footer-banner-description">
          Subscribe to our newsletter now and unlock an exclusive discount of 30% off your next purchase. Don't miss out on this opportunity to save big!
        </p>
        <form onSubmit={handleSubmit} className="footer-banner-form">
          <input 
            type="email" 
            placeholder="Your email" 
            className="footer-banner-input"
            required
          />
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <button type="button" className="footer-banner-button">
              SHOP NOW
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default FooterBanner; 