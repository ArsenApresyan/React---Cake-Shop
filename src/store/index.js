import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import wishlistReducer from '../features/wishlist/wishlistSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    wishlist: wishlistReducer,
    // Add other reducers here as we create them
  },
});

export default store; 