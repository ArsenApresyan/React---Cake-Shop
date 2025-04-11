import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';
import Login from '../Login';
import './Account.css';

const Account = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="account-container">
      <div className="account-content">
        <div className="account-header">
          <h1 className="account-title">My Account</h1>
          <button 
            onClick={handleLogout}
            className="logout-button"
          >
            Logout
          </button>
        </div>
        
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
            <div className="account-empty-state">
              <p>No items in wishlist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account; 