import React, { useState } from 'react';
import './Subscriptions.css';

const Subscriptions = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement email notification logic
    console.log('Email submitted:', email);
    setEmail('');
    alert('Thank you for your interest! We will notify you when subscriptions become available.');
  };

  const features = [
    {
      icon: 'fas fa-gift',
      title: 'Curated Selection',
      description: 'Monthly boxes of handpicked premium sweets delivered to your door'
    },
    {
      icon: 'fas fa-clock',
      title: 'Flexible Plans',
      description: 'Choose from various subscription durations that suit your needs'
    },
    {
      icon: 'fas fa-heart',
      title: 'Exclusive Benefits',
      description: 'Special discounts and early access to new products for subscribers'
    }
  ];

  return (
    <div className="coming-soon mt-5">
      <div className="coming-soon-container">
        <h1 className="coming-soon-title">Sweet Subscriptions</h1>
        <h2 className="coming-soon-subtitle">Coming Soon</h2>
        <p className="coming-soon-description">
          We're crafting a delightful subscription experience that will bring premium sweets 
          to your doorstep every month. Be the first to know when we launch our exclusive 
          subscription boxes filled with handcrafted treats.
        </p>

        <div className="subscription-features">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <i className={`${feature.icon} feature-icon`}></i>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <form className="notify-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="notify-input"
            placeholder="Enter your email for early access"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="notify-button">
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscriptions; 