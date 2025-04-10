import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import Banner from '../components/Banner';
import DonutBanner from '../components/DonutBanner';
import FooterBanner from '../components/FooterBanner';

const Home = () => {
  
  return (
    <div className="home">
      <Hero />
      <ProductSection />
      <Banner />
      <DonutBanner />
      <FooterBanner />
    </div>
  );
};

export default Home; 