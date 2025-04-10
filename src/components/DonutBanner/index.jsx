import React from 'react';
import { Link } from 'react-router-dom';
import './DonutBanner.css';

const DonutBanner = () => {
  return (
    <div className="donut-banner-wrapper">
      <div className="donut-banner-container">
        <div className="donut-banner-content">
          <h2 className="donut-banner-title">Sweet Delights Bakery</h2>
          <p className="donut-banner-description">
            Experience the luxury of our gourmet cakes, crafted with passion and precision. Perfect for 
            weddings, birthdays, and all special events. Satisfy your sweet tooth with our delightful range 
            of cakes. Each bite is a blissful journey into sweetness and joy.
          </p>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <button className="donut-banner-button">ALL PRODUCTS</button>
          </Link>
        </div>
        <div className="donut-banner-image-container">
          <img 
            src="https://caking-store-newdemo.myshopify.com/cdn/shop/files/canva-ch_a-co-ten-MAFRNUFEvHQ.jpg?v=1721803225&width=968" 
            alt="Sweet Delights Banner" 
            className="donut-banner-image"
          />
        </div>
      </div>
    </div>
  );
};

export default DonutBanner; 