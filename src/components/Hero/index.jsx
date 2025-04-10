import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    // Dynamically import the video
    import('../../assets/videos/cake-pouring.mp4')
      .then(video => {
        setVideoUrl(video.default);
      })
      .catch(err => console.error('Error loading video:', err));
  }, []);

  return (
    <section className="hero">
      <div className="hero-video-container">
        {videoUrl && (
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Cake Couture</h1>
        <p className="hero-subtitle">
          At Sugar & Spice Bakery, we believe every cake tells a story. Let us be a part
          of your special moments with our exquisite creations.
        </p>
        <Link to="/products" className="hero-button">
          ALL PRODUCTS
        </Link>
      </div>
    </section>
  );
};

export default Hero; 