import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { wishlistService } from '../../services/wishlistService';

// Async Thunks
export const fetchWishlist = createAsyncThunk(
  'wishlist/fetchWishlist',
  async (userId) => {
    return await wishlistService.getWishlist(userId);
  }
);

export const addToWishlist = createAsyncThunk(
  'wishlist/addItem',
  async ({ userId, product }) => {
    return await wishlistService.addItem(userId, product);
  }
);

export const removeFromWishlist = createAsyncThunk(
  'wishlist/removeItem',
  async ({ userId, productId }) => {
    return await wishlistService.removeItem(userId, productId);
  }
);

const initialState = {
  items: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    clearWishlist: (state) => {
      state.items = [];
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch Wishlist
      .addCase(fetchWishlist.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Add to Wishlist
      .addCase(addToWishlist.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Remove from Wishlist
      .addCase(removeFromWishlist.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = state.items.filter(item => item.id !== action.payload);
        state.error = null;
      })
      .addCase(removeFromWishlist.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer; 