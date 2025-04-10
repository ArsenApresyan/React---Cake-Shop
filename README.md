# Sweet Delights Bakery 🍰

A modern, responsive e-commerce platform for a premium bakery, built with React and Redux.

![Sweet Delights Banner](public/assets/images/banner.jpg)

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

## 🎨 Features in Detail

### Product Display
- Grid layout for product showcase
- Category-based filtering
- Product cards with hover effects
- Quick view functionality
- Sale tags and pricing

### User Experience
- Smooth page transitions
- Responsive navigation
- Loading states
- Error handling
- Form validation

### Authentication
- JWT-based authentication
- Protected routes
- User profile management
- Session handling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Design inspiration from [source]
- Icons from Font Awesome
- Images from [source]
