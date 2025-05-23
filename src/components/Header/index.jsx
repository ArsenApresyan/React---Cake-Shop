import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { items: wishlistItems } = useSelector((state) => state.wishlist);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (isHomePage) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    // Add scrolled class initially if not on home page
    const header = document.querySelector('.header');
    if (!isHomePage) {
      header.classList.add('scrolled');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className={`header ${!isHomePage ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">CAKING</Link>
        </div>
        
        <nav className="main-nav">
          <ul>
            <li className={isActive('/')}><Link to="/">Home</Link></li>
            <li className={isActive('/products')}><Link to="/products">All Products</Link></li>
            <li className={isActive('/about')}><Link to="/about">About</Link></li>
            <li className={isActive('/subscription')}><Link to="/subscription">Subscription</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/account" className={`icon-button account ${isActive('/account')}`}>
            <i className="fa-solid fa-user"></i>
            {isAuthenticated && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
            )}
          </Link>
          <Link to="/wishlist" className={`icon-button wishlist ${isActive('/wishlist')}`}>
            <i className="fa-solid fa-heart"></i>
            {wishlistItems.length > 0 && (
              <span className="cart-count">{wishlistItems.length}</span>
            )}
          </Link>
          <Link to="/cart" className={`icon-button cart ${isActive('/cart')}`}>
            <i className="fa-solid fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 