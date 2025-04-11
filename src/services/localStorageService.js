const AUTH_KEY = 'sweet_delights_auth';
const USER_KEY = 'sweet_delights_user';

export const localStorageService = {
  // Auth token operations
  getToken: () => {
    return localStorage.getItem(AUTH_KEY);
  },

  setToken: (token) => {
    localStorage.setItem(AUTH_KEY, token);
  },

  removeToken: () => {
    localStorage.removeItem(AUTH_KEY);
  },

  // User data operations
  getUser: () => {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  setUser: (user) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  removeUser: () => {
    localStorage.removeItem(USER_KEY);
  },

  // Clear all auth data
  clearAuth: () => {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(USER_KEY);
  }
}; 