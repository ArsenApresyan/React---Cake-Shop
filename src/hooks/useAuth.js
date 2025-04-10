import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
} from '../features/auth/authSlice';
import authService from '../services/authService';

// Custom hook for authentication
const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated, loading, error } = useSelector((state) => state.auth);

  // Login with email and password
  const login = async (email, password) => {
    try {
      dispatch(loginStart());
      const response = await authService.login({ email, password });
      dispatch(loginSuccess(response.user));
      navigate('/');
      return { success: true };
    } catch (error) {
      dispatch(loginFailure(error.message));
      return { success: false, error: error.message };
    }
  };

  // Register a new user
  const register = async (userData) => {
    try {
      dispatch(registerStart());
      const response = await authService.register(userData);
      dispatch(registerSuccess(response.user));
      navigate('/');
      return { success: true };
    } catch (error) {
      dispatch(registerFailure(error.message));
      return { success: false, error: error.message };
    }
  };

  // Login with Google
  const loginWithGoogle = async (googleToken) => {
    try {
      dispatch(loginStart());
      const response = await authService.loginWithGoogle(googleToken);
      dispatch(loginSuccess(response.user));
      navigate('/');
      return { success: true };
    } catch (error) {
      dispatch(loginFailure(error.message));
      return { success: false, error: error.message };
    }
  };

  // Logout
  const logoutUser = async () => {
    try {
      await authService.logout();
      dispatch(logout());
      navigate('/login');
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Check if user is authenticated
  const checkAuth = async () => {
    try {
      const response = await authService.getCurrentUser();
      dispatch(loginSuccess(response.user));
      return { success: true };
    } catch (error) {
      dispatch(logout());
      return { success: false, error: error.message };
    }
  };

  return {
    user,
    isAuthenticated,
    loading,
    error,
    login,
    register,
    loginWithGoogle,
    logout: logoutUser,
    checkAuth,
  };
};

export default useAuth; 