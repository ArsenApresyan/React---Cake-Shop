import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import stripeService from '../services/stripeService';

// Initialize Stripe
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

// Custom hook for Stripe integration
const useStripe = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Create a payment intent
  const createPaymentIntent = async (amount, currency = 'usd') => {
    try {
      setLoading(true);
      setError(null);
      const response = await stripeService.createPaymentIntent(amount, currency);
      return { success: true, clientSecret: response.clientSecret };
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Create a subscription
  const createSubscription = async (subscriptionData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await stripeService.createSubscription(subscriptionData);
      return { success: true, subscription: response.subscription };
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Update a subscription
  const updateSubscription = async (subscriptionId, updateData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await stripeService.updateSubscription(subscriptionId, updateData);
      return { success: true, subscription: response.subscription };
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Cancel a subscription
  const cancelSubscription = async (subscriptionId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await stripeService.cancelSubscription(subscriptionId);
      return { success: true, subscription: response.subscription };
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Get subscription details
  const getSubscription = async (subscriptionId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await stripeService.getSubscription(subscriptionId);
      return { success: true, subscription: response.subscription };
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // List all subscriptions for a user
  const listSubscriptions = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await stripeService.listSubscriptions();
      return { success: true, subscriptions: response.subscriptions };
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Create a customer
  const createCustomer = async (customerData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await stripeService.createCustomer(customerData);
      return { success: true, customer: response.customer };
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Add a payment method to a customer
  const addPaymentMethod = async (customerId, paymentMethodId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await stripeService.addPaymentMethod(customerId, paymentMethodId);
      return { success: true, paymentMethod: response.paymentMethod };
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // List payment methods for a customer
  const listPaymentMethods = async (customerId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await stripeService.listPaymentMethods(customerId);
      return { success: true, paymentMethods: response.paymentMethods };
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  return {
    stripePromise,
    loading,
    error,
    createPaymentIntent,
    createSubscription,
    updateSubscription,
    cancelSubscription,
    getSubscription,
    listSubscriptions,
    createCustomer,
    addPaymentMethod,
    listPaymentMethods,
  };
};

export default useStripe; 