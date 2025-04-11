import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginStart, loginSuccess, loginFailure } from '../../features/auth/authSlice';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      // Simulate API call with local storage
      const mockUser = {
        id: '1',
        name: 'Test User',
        email: formData.email,
        createdAt: new Date().toISOString()
      };

      const mockToken = 'mock-jwt-token';

      // Simulate successful login
      dispatch(loginSuccess({ user: mockUser, token: mockToken }));
      navigate('/account');
    } catch (err) {
      dispatch(loginFailure(err.message));
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1 className="login-title">Sign in</h1>
        <p className="login-subtitle">
          If you have an account with us, please sign in.
        </p>
        
        {error && <div className="login-error">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="login-input"
            />
          </div>
          
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="login-input"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="login-button"
          >
            {loading ? 'SIGNING IN...' : 'SIGN IN'}
          </button>
        </form>

        <div className="login-footer">
          <div>
            Don't have an account?{' '}
            <Link to="/register" className="login-link">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 