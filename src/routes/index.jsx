import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import SweetBoxes from '../pages/SweetBoxes/index';
import Subscriptions from '../pages/Subscriptions/index';
import Orders from '../pages/Orders/index';
import Terms from '../pages/Terms/index';
import Privacy from '../pages/Privacy/index';
import Login from '../pages/Login/index';
import Register from '../pages/Register';
import Products from '../pages/products';
import About from '../pages/About';
import ProductDetail from '../pages/ProductDetail';
import Account from '../pages/Account';

// Protected route wrapper component
export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// Public routes that don't require authentication
export const publicRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/product/:id',
    element: <ProductDetail />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/boxes',
    element: <SweetBoxes />,
  },
  {
    path: '/subscription',
    element: <Subscriptions />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/terms',
    element: <Terms />,
  },
  {
    path: '/privacy',
    element: <Privacy />,
  },
];

// Protected routes that require authentication
export const protectedRoutes = [
  {
    path: '/account',
    element: (
      <ProtectedRoute>
        <Account />
      </ProtectedRoute>
    ),
  },
  {
    path: '/orders',
    element: (
      <ProtectedRoute>
        <Orders />
      </ProtectedRoute>
    ),
  },
];

// Combine all routes
export const routes = [...publicRoutes, ...protectedRoutes]; 