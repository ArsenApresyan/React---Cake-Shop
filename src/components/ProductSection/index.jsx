import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsList from '../ProductsList';
import './ProductSection.css';

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState('Best Seller');

  const categories = [
    'Best Seller',
    'Cake Charm',
    'Cookies',
    'Sweet Bite',
    'Hot Order'
  ];

  const products = [
    {
      id: 1,
      image: '//caking-store-newdemo.myshopify.com/cdn/shop/files/image_588.png?v=1721790216&width=650',
      title: 'Blueberry Delight',
      description: 'Experience the perfect blend of fresh blueberries and creamy vanilla frosting in every bite.',
      category: 'Best Seller'
    },
    {
      id: 2,
      image: '//caking-store-newdemo.myshopify.com/cdn/shop/files/image_589.png?v=1721790216&width=650',
      title: 'Sugar & Spice Bakery',
      description: 'Dit is belangrik om te weet dat die kliënt die kliënt is, maar die ontwikkelaar is die ontwikkelaar',
      category: 'Best Seller'
    },
    {
      id: 3,
      image: '//caking-store-newdemo.myshopify.com/cdn/shop/files/image_587.png?v=1721790216&width=650',
      title: 'Chocolate Stack',
      description: 'Indulge in our signature chocolate cookies, perfectly stacked for an irresistible treat.',
      category: 'Best Seller'
    }
  ];

  const productsList = [
    {
      id: 1,
      image: '//caking-store-newdemo.myshopify.com/cdn/shop/files/Almond-Joy-Delight-3.jpg?v=1721629929&width=600',
      title: 'Coconut Cloud Cake',
      price: 60.00,
      originalPrice: 70.00,
      onSale: true
    },
    {
      id: 2,
      image: '//caking-store-newdemo.myshopify.com/cdn/shop/files/2.jpg?v=1721629759&width=600',
      title: 'Cherry Blossom Cake',
      price: 40.00,
      originalPrice: 70.00,
      onSale: true
    },
    {
      id: 3,
      image: '//caking-store-newdemo.myshopify.com/cdn/shop/files/Coconut-Cloud-Cake-1.jpg?v=1721629940&width=600',
      title: 'Chocolate Symphony Cake',
      price: 80.00,
      onSale: false
    },
    {
      id: 4,
      image: '//caking-store-newdemo.myshopify.com/cdn/shop/files/Almond-Joy-Delight-3.jpg?v=1721629929&width=600',
      title: 'Red Velvet Rapture Cake',
      price: 60.00,
      originalPrice: 70.00,
      onSale: true
    }
  ];

  const handleQuickView = (product) => {
    // TODO: Implement quick view functionality
    console.log('Quick view:', product);
  };

  const handleAddToCart = (product) => {
    // TODO: Implement add to cart functionality
    console.log('Add to cart:', product);
  };

  const handleAddToWishlist = (product) => {
    // TODO: Implement wishlist functionality
    console.log('Add to wishlist:', product);
  };

  return (
    <div className="product-section">
      <div className="hero-products">
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                <div className="product-overlay">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <button className="shop-now-btn">SHOP NOW</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <ProductsList 
        products={productsList}
        onAddToCart={handleAddToCart}
        onQuickView={handleQuickView}
        onAddToWishlist={handleAddToWishlist}
      />

      <div className="all-products-btn">
        <Link to="/products" style={{ textDecoration: 'none' }}>
          <button>All Products</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductSection;