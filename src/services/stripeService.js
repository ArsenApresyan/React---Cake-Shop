import api from './api';

// Stripe service for handling payments and subscriptions
const stripeService = {
  // Create a payment intent
  createPaymentIntent: async (amount, currency = 'usd') => {
    return api.post('/stripe/create-payment-intent', { amount, currency });
  },

  // Create a subscription
  createSubscription: async (subscriptionData) => {
    return api.post('/stripe/create-subscription', subscriptionData);
  },

  // Update a subscription
  updateSubscription: async (subscriptionId, updateData) => {
    return api.put(`/stripe/subscriptions/${subscriptionId}`, updateData);
  },

  // Cancel a subscription
  cancelSubscription: async (subscriptionId) => {
    return api.post(`/stripe/subscriptions/${subscriptionId}/cancel`);
  },

  // Get subscription details
  getSubscription: async (subscriptionId) => {
    return api.get(`/stripe/subscriptions/${subscriptionId}`);
  },

  // List all subscriptions for a user
  listSubscriptions: async () => {
    return api.get('/stripe/subscriptions');
  },

  // Create a customer
  createCustomer: async (customerData) => {
    return api.post('/stripe/customers', customerData);
  },

  // Update a customer
  updateCustomer: async (customerId, updateData) => {
    return api.put(`/stripe/customers/${customerId}`, updateData);
  },

  // Get customer details
  getCustomer: async (customerId) => {
    return api.get(`/stripe/customers/${customerId}`);
  },

  // Add a payment method to a customer
  addPaymentMethod: async (customerId, paymentMethodId) => {
    return api.post(`/stripe/customers/${customerId}/payment-methods`, {
      paymentMethodId,
    });
  },

  // List payment methods for a customer
  listPaymentMethods: async (customerId) => {
    return api.get(`/stripe/customers/${customerId}/payment-methods`);
  },
};

export default stripeService; 