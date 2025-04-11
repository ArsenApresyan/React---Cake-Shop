import { localStorageService } from './localStorageService';

const WISHLIST_KEY = 'sweet_delights_wishlist';

// Wishlist service for handling wishlist operations
const wishlistService = {
  // Get wishlist for a user
  getWishlist: async (userId) => {
    try {
      const wishlist = localStorage.getItem(WISHLIST_KEY);
      return wishlist ? JSON.parse(wishlist) : [];
    } catch (error) {
      console.error('Error fetching wishlist:', error);
      return [];
    }
  },

  // Add item to wishlist
  addItem: async (userId, product) => {
    try {
      const wishlist = localStorage.getItem(WISHLIST_KEY);
      const items = wishlist ? JSON.parse(wishlist) : [];
      
      // Check if item already exists
      if (items.some(item => item.id === product.id)) {
        return product;
      }
      
      items.push(product);
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
      return product;
    } catch (error) {
      console.error('Error adding item to wishlist:', error);
      throw error;
    }
  },

  // Remove item from wishlist
  removeItem: async (userId, productId) => {
    try {
      const wishlist = localStorage.getItem(WISHLIST_KEY);
      if (wishlist) {
        const items = JSON.parse(wishlist);
        const updatedItems = items.filter(item => item.id !== productId);
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(updatedItems));
      }
      return productId;
    } catch (error) {
      console.error('Error removing item from wishlist:', error);
      throw error;
    }
  },

  // Clear wishlist
  clearWishlist: async (userId) => {
    try {
      localStorage.removeItem(WISHLIST_KEY);
    } catch (error) {
      console.error('Error clearing wishlist:', error);
      throw error;
    }
  },

  // Check if item is in wishlist
  isInWishlist: async (userId, productId) => {
    try {
      const wishlist = localStorage.getItem(WISHLIST_KEY);
      if (!wishlist) return false;
      const items = JSON.parse(wishlist);
      return items.some(item => item.id === productId);
    } catch (error) {
      console.error('Error checking wishlist status:', error);
      return false;
    }
  }
};

export { wishlistService }; 