import api from './api';

// Box service for handling sweet box operations
const boxService = {
  // Get all sweet boxes
  getAllBoxes: async () => {
    return api.get('/boxes');
  },

  // Get a specific sweet box by ID
  getBoxById: async (boxId) => {
    return api.get(`/boxes/${boxId}`);
  },

  // Get featured sweet boxes
  getFeaturedBoxes: async () => {
    return api.get('/boxes/featured');
  },

  // Get seasonal sweet boxes
  getSeasonalBoxes: async () => {
    return api.get('/boxes/seasonal');
  },

  // Create a new sweet box (admin only)
  createBox: async (boxData) => {
    return api.post('/boxes', boxData);
  },

  // Update a sweet box (admin only)
  updateBox: async (boxId, boxData) => {
    return api.put(`/boxes/${boxId}`, boxData);
  },

  // Delete a sweet box (admin only)
  deleteBox: async (boxId) => {
    return api.delete(`/boxes/${boxId}`);
  },

  // Get box categories
  getCategories: async () => {
    return api.get('/boxes/categories');
  },

  // Get boxes by category
  getBoxesByCategory: async (categoryId) => {
    return api.get(`/boxes/category/${categoryId}`);
  },

  // Search boxes
  searchBoxes: async (query) => {
    return api.get('/boxes/search', { params: { q: query } });
  },
};

export default boxService; 