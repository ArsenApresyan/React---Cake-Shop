import api from './api';

// Subscription service for handling subscription operations
const subscriptionService = {
  // Get all subscriptions for the current user
  getUserSubscriptions: async () => {
    return api.get('/subscriptions');
  },

  // Get a specific subscription by ID
  getSubscriptionById: async (subscriptionId) => {
    return api.get(`/subscriptions/${subscriptionId}`);
  },

  // Create a new subscription
  createSubscription: async (subscriptionData) => {
    return api.post('/subscriptions', subscriptionData);
  },

  // Update a subscription
  updateSubscription: async (subscriptionId, updateData) => {
    return api.put(`/subscriptions/${subscriptionId}`, updateData);
  },

  // Cancel a subscription
  cancelSubscription: async (subscriptionId) => {
    return api.post(`/subscriptions/${subscriptionId}/cancel`);
  },

  // Pause a subscription
  pauseSubscription: async (subscriptionId, pauseData) => {
    return api.post(`/subscriptions/${subscriptionId}/pause`, pauseData);
  },

  // Resume a paused subscription
  resumeSubscription: async (subscriptionId) => {
    return api.post(`/subscriptions/${subscriptionId}/resume`);
  },

  // Change subscription frequency
  changeFrequency: async (subscriptionId, frequency) => {
    return api.put(`/subscriptions/${subscriptionId}/frequency`, { frequency });
  },

  // Change subscription box
  changeBox: async (subscriptionId, boxId) => {
    return api.put(`/subscriptions/${subscriptionId}/box`, { boxId });
  },

  // Get subscription history
  getSubscriptionHistory: async (subscriptionId) => {
    return api.get(`/subscriptions/${subscriptionId}/history`);
  },

  // Get available delivery dates
  getAvailableDeliveryDates: async (boxId) => {
    return api.get(`/subscriptions/delivery-dates`, { params: { boxId } });
  },
};

export default subscriptionService; 