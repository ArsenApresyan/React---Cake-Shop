import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-container">
        <img 
          src="//caking-store-newdemo.myshopify.com/cdn/shop/files/honeymamas-vip-desktop.webp?v=1721796231&width=1920" 
          alt="Sweet Creations Banner" 
          className="banner-image"
        />
        <div className="banner-content">
          <h2 className="banner-title">Sweet Creations, Unforgettable Moments</h2>
          <p className="banner-description">
            Smul aan ons heerlike koeke wat met liefde en die beste bestanddele gemaak is. 
            Perfek vir elke viering, groot of klein. Van klassieke geure tot pasgemaakte ontwerpe, 
            ons koeke word tot perfeksie gebak.
          </p>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <button className="banner-button">ALL PRODUCTS</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner; 