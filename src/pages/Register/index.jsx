import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerStart, registerSuccess, registerFailure } from '../../features/auth/authSlice';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
    dispatch(registerStart());

    try {
      // Simulate API call with local storage
      const mockUser = {
        id: '1',
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        createdAt: new Date().toISOString()
      };

      const mockToken = 'mock-jwt-token';

      // Simulate successful registration
      dispatch(registerSuccess({ user: mockUser, token: mockToken }));
      navigate('/account');
    } catch (err) {
      dispatch(registerFailure(err.message));
    }
  };

  return (
    <div className="register-container">
      <div className="register-form-container">
        <h1 className="register-title">Create Account</h1>
        <p className="register-subtitle">
          Please fill in the fields below
        </p>
        
        {error && <div className="register-error">{error}</div>}
        
        <form onSubmit={handleSubmit} className="register-form">
          <div className="register-name-group">
            <div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="register-input"
              />
            </div>
            <div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="register-input"
              />
            </div>
          </div>
          
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="register-input"
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
              className="register-input"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="register-button"
          >
            {loading ? 'CREATING...' : 'CREATE'}
          </button>
        </form>

        <div className="register-footer">
          Already have an account?{' '}
          <Link to="/login" className="register-link">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register; 