import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../features/wishlist/wishlistSlice';
import './ProductListItem.css';

const ProductListItem = ({ product, onAddToCart, onQuickView }) => {
  const { id, title, price, originalPrice, image, onSale } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.wishlist);
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    setIsInWishlist(items.some(item => item.id === id));
  }, [items, id]);

  const handleQuickView = (e) => {
    e.preventDefault();
    navigate(`/product/${id}`);
  };

  const handleWishlistClick = async () => {
    if (!isAuthenticated) {
      // TODO: Show login modal or redirect to login page
      navigate('/login');
      return;
    }

    if (isInWishlist) {
      await dispatch(removeFromWishlist({ userId: user.id, productId: id }));
    } else {
      await dispatch(addToWishlist({ userId: user.id, product }));
    }
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
            className={`action-btn wishlist-btn ${isInWishlist ? 'active' : ''}`}
            onClick={handleWishlistClick}
            title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          >
            <i className={isInWishlist ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
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