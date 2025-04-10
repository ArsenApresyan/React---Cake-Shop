import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProductListItem.css';

const ProductListItem = ({ product, onAddToCart, onQuickView, onAddToWishlist }) => {
  const { id, title, price, originalPrice, image, onSale } = product;
  const navigate = useNavigate();

  const handleQuickView = (e) => {
    e.preventDefault();
    
    navigate(`/product/${id}`);
    
  };

  return (
    <div className="product-list-item">
      {onSale && <span className="sale-tag">Sale</span>}
      <div className="product-list-image">
        <Link to={`/product/${id}`} className="product-image">
          <img src={image} alt={title} />
        </Link>
        <div className="product-actions">
          <button 
            className="action-btn cart-btn"
            onClick={() => onAddToCart(product)}
            title="Add to Cart"
          >
            <i className="fa-solid fa-shopping-bag"></i>
          </button>
          <button 
            className="action-btn quick-view-btn"
            onClick={handleQuickView}
            title="Quick View"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button 
            className="action-btn wishlist-btn"
            onClick={() => onAddToWishlist(product)}
            title="Add to Wishlist"
          >
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
      <h3 className="product-list-title">{title}</h3>
      <div className="product-list-price">
        <span className="current-price">${price.toFixed(2)}</span>
        {originalPrice && (
          <span className="original-price">${originalPrice.toFixed(2)}</span>
        )}
      </div>
    </div>
  );
};

export default ProductListItem; 