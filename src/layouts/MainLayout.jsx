import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoToTop from '../components/GoToTop';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <div>
        {children}
      </div>
      <Footer />
      <GoToTop />
    </div>
  );
};

export default MainLayout; 