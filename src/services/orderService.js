import api from './api';

// Order service for handling order operations
const orderService = {
  // Get all orders for the current user
  getUserOrders: async () => {
    return api.get('/orders');
  },

  // Get a specific order by ID
  getOrderById: async (orderId) => {
    return api.get(`/orders/${orderId}`);
  },

  // Create a new order
  createOrder: async (orderData) => {
    return api.post('/orders', orderData);
  },

  // Update an order
  updateOrder: async (orderId, updateData) => {
    return api.put(`/orders/${orderId}`, updateData);
  },

  // Cancel an order
  cancelOrder: async (orderId) => {
    return api.post(`/orders/${orderId}/cancel`);
  },

  // Get order tracking information
  getOrderTracking: async (orderId) => {
    return api.get(`/orders/${orderId}/tracking`);
  },

  // Get order history
  getOrderHistory: async () => {
    return api.get('/orders/history');
  },

  // Get order status
  getOrderStatus: async (orderId) => {
    return api.get(`/orders/${orderId}/status`);
  },

  // Get order invoice
  getOrderInvoice: async (orderId) => {
    return api.get(`/orders/${orderId}/invoice`);
  },

  // Get order items
  getOrderItems: async (orderId) => {
    return api.get(`/orders/${orderId}/items`);
  },
};

export default orderService; 