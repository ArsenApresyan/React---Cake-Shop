import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';
import Login from '../Login';
import { fetchWishlist, removeFromWishlist } from '../../features/wishlist/wishlistSlice';
import './Account.css';

const Account = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: wishlistItems, status } = useSelector((state) => state.wishlist);

  useEffect(() => {
    if (isAuthenticated && user) {
      dispatch(fetchWishlist(user.id));
    }
  }, [dispatch, isAuthenticated, user]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleRemoveFromWishlist = async (productId) => {
    if (isAuthenticated && user) {
      await dispatch(removeFromWishlist({ userId: user.id, productId }));
    }
  };

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="account-page">
      <div className="account-container">
        <div className="account-header">
          <h1>My Account</h1>
          <p>Welcome back, {user?.name || 'User'}!</p>
          <button 
            onClick={handleLogout}
            className="logout-button"
          >
            Logout
          </button>
        </div>
        
        <div className="account-content">
          <div className="account-grid">
            <div className="account-card">
              <h2 className="account-card-title">Profile Information</h2>
              <div className="account-info">
                <p className="account-info-item">
                  <span className="account-info-label">Name:</span>
                  {user.name}
                </p>
                <p className="account-info-item">
                  <span className="account-info-label">Email:</span>
                  {user.email}
                </p>
                <p className="account-info-item">
                  <span className="account-info-label">Member Since:</span>
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="account-card">
              <h2 className="account-card-title">Order History</h2>
              <div className="account-empty-state">
                <p>No orders yet</p>
              </div>
            </div>

            <div className="account-card">
              <h2 className="account-card-title">Wishlist</h2>
              {status === 'loading' ? (
                <div className="account-loading">
                  <p>Loading wishlist...</p>
                </div>
              ) : wishlistItems.length > 0 ? (
                <div className="wishlist-items">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="wishlist-item">
                      <Link to={`/product/${item.id}`} className="wishlist-item-image">
                        <img src={item.image} alt={item.title} />
                      </Link>
                      <div className="wishlist-item-details">
                        <Link to={`/product/${item.id}`} className="wishlist-item-title">
                          {item.title}
                        </Link>
                        <div className="wishlist-item-price">
                          <span className="current-price">${item.price.toFixed(2)}</span>
                          {item.originalPrice && (
                            <span className="original-price">${item.originalPrice.toFixed(2)}</span>
                          )}
                        </div>
                      </div>
                      <button
                        className="remove-wishlist-btn"
                        onClick={() => handleRemoveFromWishlist(item.id)}
                        title="Remove from Wishlist"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="account-empty-state">
                  <p>No items in wishlist</p>
                  <Link to="/products" className="browse-products-btn">
                    Browse Products
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account; 