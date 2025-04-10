# Sweet Delights Bakery 🍰

A modern, responsive e-commerce platform for a premium bakery, built with React and Redux.

## 🌟 Features

- **Modern UI/UX**: Clean and intuitive interface with smooth animations
- **Responsive Design**: Fully responsive layout that works on all devices
- **Product Showcase**: 
  - Featured products section with hover effects
  - Product categories with tabs
  - Detailed product listings with prices and sale tags
- **Shopping Experience**:
  - Quick view functionality
  - Add to cart
  - Wishlist management
- **User Authentication**:
  - User registration and login
  - Google authentication integration
  - Protected routes
- **Payment Integration**:
  - Stripe payment processing
  - Secure checkout
  - Subscription management

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/sweet-delights.git
cd sweet-delights
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
REACT_APP_API_URL=your_api_url
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

4. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [React Router](https://reactrouter.com/) - Routing
- [Stripe](https://stripe.com/) - Payment processing
- [Font Awesome](https://fontawesome.com/) - Icons
- [Vite](https://vitejs.dev/) - Build tool

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
├── features/          # Redux slices and features
├── hooks/             # Custom React hooks
├── layouts/           # Layout components
├── pages/             # Page components
├── services/          # API services
└── utils/             # Utility functions
```
