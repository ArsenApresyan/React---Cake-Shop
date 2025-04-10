import React from 'react';
import './About.css';

const About = () => {
  const values = [
    {
      icon: 'fa-star',
      title: 'Premium Quality',
      description: 'We use only the finest ingredients to create our exquisite sweets, ensuring every bite is a moment of pure delight.'
    },
    {
      icon: 'fa-heart',
      title: 'Made with Love',
      description: 'Each creation is crafted with passion and dedication, bringing joy and sweetness to every celebration.'
    },
    {
      icon: 'fa-leaf',
      title: 'Fresh & Natural',
      description: 'We prioritize fresh, natural ingredients to deliver not just delicious, but also wholesome treats.'
    }
  ];

  const team = [
    {
      image: '//caking-store-newdemo.myshopify.com/cdn/shop/files/team-1.jpg?v=1721790216',
      name: 'Sarah Johnson',
      role: 'Master Pastry Chef'
    },
    {
      image: '//caking-store-newdemo.myshopify.com/cdn/shop/files/team-2.jpg?v=1721790216',
      name: 'Michael Chen',
      role: 'Creative Director'
    },
    {
      image: '//caking-store-newdemo.myshopify.com/cdn/shop/files/team-3.jpg?v=1721790216',
      name: 'Emma Davis',
      role: 'Head of Operations'
    }
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-hero">
          <h1>Crafting Sweet Moments</h1>
          <p>
            Welcome to CAKING, where passion meets perfection in every creation. 
            We're dedicated to bringing joy through our premium sweets and exceptional service.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-image">
            <img 
              src="//caking-store-newdemo.myshopify.com/cdn/shop/files/about-main.jpg?v=1721790216" 
              alt="Our Story" 
            />
          </div>
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, CAKING began with a simple mission: to create premium sweets that bring joy to life's special moments. 
              What started as a small family bakery has grown into a beloved destination for those seeking exceptional quality and unforgettable flavors.
            </p>
            <p>
              Our commitment to excellence drives us to source the finest ingredients and continuously innovate our creations. 
              Every cake, cookie, and sweet treat is crafted with meticulous attention to detail and a dash of creativity.
            </p>
          </div>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <i className={`fas ${value.icon}`}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-member">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 