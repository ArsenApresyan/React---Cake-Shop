import { combineReducers } from 'redux';
import authReducer from '../features/auth/authSlice';

// Import other reducers as they are created
// import boxesReducer from '../features/boxes/boxesSlice';
// import subscriptionReducer from '../features/subscription/subscriptionSlice';
// import ordersReducer from '../features/orders/ordersSlice';
// import userReducer from '../features/user/userSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here as they are created
  // boxes: boxesReducer,
  // subscription: subscriptionReducer,
  // orders: ordersReducer,
  // user: userReducer,
});

export default rootReducer; 