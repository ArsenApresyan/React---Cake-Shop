import api from './api';

// Auth service for handling user authentication
const authService = {
  // Register a new user
  register: async (userData) => {
    return api.post('/auth/register', userData);
  },

  // Login a user
  login: async (credentials) => {
    return api.post('/auth/login', credentials);
  },

  // Login with Google
  loginWithGoogle: async (googleToken) => {
    return api.post('/auth/google', { token: googleToken });
  },

  // Logout a user
  logout: async () => {
    return api.post('/auth/logout');
  },

  // Get current user
  getCurrentUser: async () => {
    return api.get('/auth/me');
  },

  // Update user profile
  updateProfile: async (userData) => {
    return api.put('/auth/profile', userData);
  },

  // Change password
  changePassword: async (passwordData) => {
    return api.put('/auth/password', passwordData);
  },

  // Request password reset
  requestPasswordReset: async (email) => {
    return api.post('/auth/reset-password', { email });
  },

  // Reset password with token
  resetPassword: async (token, newPassword) => {
    return api.post('/auth/reset-password/confirm', { token, newPassword });
  },
};

export default authService; 