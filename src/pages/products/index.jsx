import React from 'react';
import './products.css';

const Products = () => {
  const products = [
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
    },
    // Repeating some products to get to 12
    {
      id: 5,
      image: '//caking-store-newdemo.myshopify.com/cdn/shop/files/Almond-Joy-Delight-3.jpg?v=1721629929&width=600',
      title: 'Coconut Cloud Cake',
      price: 65.00,
      originalPrice: 75.00,
      onSale: true
    },
    {
      id: 6,
      image: '//caking-store-newdemo.myshopify.com/cdn/shop/files/2.jpg?v=1721629759&width=600',
      title: 'Cherry Blossom Cake',
      price: 45.00,
      originalPrice: 75.00,
      onSale: true
    },
    {
      id: 7,
      image: '//caking-store-newdemo.myshopify.com/cdn/shop/files/Coconut-Cloud-Cake-1.jpg?v=1721629940&width=600',
      title: 'Chocolate Symphony Cake',
      price: 85.00,
      onSale: false
    },
    {
      id: 8,
      image: '//caking-store-newdemo.myshopify.com/cdn/shop/files/Almond-Joy-Delight-3.jpg?v=1721629929&width=600',
      title: 'Red Velvet Rapture Cake',
      price: 65.00,
      originalPrice: 75.00,
      onSale: true
    },
    {
      id: 9,
      image: '//caking-store-newdemo.myshopify.com/cdn/shop/files/Almond-Joy-Delight-3.jpg?v=1721629929&width=600',
      title: 'Coconut Cloud Cake',
      price: 70.00,
      originalPrice: 80.00,
      onSale: true
    },
    {
      id: 10,
      image: '//caking-store-newdemo.myshopify.com/cdn/shop/files/2.jpg?v=1721629759&width=600',
      title: 'Cherry Blossom Cake',
      price: 50.00,
      originalPrice: 80.00,
      onSale: true
    },
    {
      id: 11,
      image: '//caking-store-newdemo.myshopify.com/cdn/shop/files/Coconut-Cloud-Cake-1.jpg?v=1721629940&width=600',
      title: 'Chocolate Symphony Cake',
      price: 90.00,
      onSale: false
    },
    {
      id: 12,
      image: '//caking-store-newdemo.myshopify.com/cdn/shop/files/Almond-Joy-Delight-3.jpg?v=1721629929&width=600',
      title: 'Red Velvet Rapture Cake',
      price: 70.00,
      originalPrice: 80.00,
      onSale: true
    }
  ];

  const handleQuickView = (product) => {
    console.log('Quick view:', product);
  };

  const handleAddToCart = (product) => {
    console.log('Add to cart:', product);
  };

  const handleAddToWishlist = (product) => {
    console.log('Add to wishlist:', product);
  };

  return (
    <div className="products-page mt-5">
      <div className="products-container">
        <h1>All Products</h1>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-list-item">
              {product.onSale && <span className="sale-tag">Sale</span>}
              <div className="product-list-image">
                <img src={product.image} alt={product.title} />
                <div className="product-actions">
                  <button 
                    className="action-btn cart-btn"
                    onClick={() => handleAddToCart(product)}
                    title="Add to Cart"
                  >
                    <i className="fa-solid fa-shopping-bag"></i>
                  </button>
                  <button 
                    className="action-btn quick-view-btn"
                    onClick={() => handleQuickView(product)}
                    title="Quick View"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                  <button 
                    className="action-btn wishlist-btn"
                    onClick={() => handleAddToWishlist(product)}
                    title="Add to Wishlist"
                  >
                    <i className="fa-regular fa-heart"></i>
                  </button>
                </div>
              </div>
              <h3 className="product-list-title">{product.title}</h3>
              <div className="product-list-price">
                <span className="current-price">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products; 