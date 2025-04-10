import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { addToCart } from '../../features/cart/cartSlice';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('medium');

  // Mock product data - replace with actual data fetching
  const product = {
    id: id,
    title: "Chocolate Symphony Cake",
    price: 45.99,
    originalPrice: 59.99,
    description: "Indulge in our signature chocolate cake, layered with rich chocolate ganache and topped with chocolate shavings. Perfect for any celebration or special occasion.",
    images: [
      "//caking-store-newdemo.myshopify.com/cdn/shop/files/2.jpg?v=1721629759&width=600",
      "//caking-store-newdemo.myshopify.com/cdn/shop/files/3.jpg?v=1721629759&width=600",
      "//caking-store-newdemo.myshopify.com/cdn/shop/files/1.jpg?v=1721629759&width=600"
    ],
    sizes: ['small', 'medium', 'large'],
    ingredients: [
      "Premium Belgian chocolate",
      "Fresh cream",
      "Butter",
      "Flour",
      "Sugar",
      "Eggs",
      "Vanilla extract"
    ],
    nutritionInfo: {
      calories: "350",
      protein: "4g",
      carbs: "45g",
      fat: "18g"
    }
  };

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, Math.min(10, quantity + value));
    setQuantity(newQuantity);
  };

//   const handleAddToCart = () => {
//     dispatch(addToCart({
//       id: product.id,
//       title: product.title,
//       price: product.price,
//       quantity: quantity,
//       size: selectedSize,
//       image: product.images[0]
//     }));
//   };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container mt-5">
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.images[0]} alt={product.title} />
          </div>
          <div className="thumbnail-list">
            {product.images.map((image, index) => (
              <div key={index} className="thumbnail">
                <img src={image} alt={`${product.title} view ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          
          <div className="product-price">
            <span className="current-price">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>

          <div className="product-options">
            <div className="size-selector">
              <h3>Select Size</h3>
              <div className="size-buttons">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size.charAt(0).toUpperCase() + size.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="quantity-and-cart">
              <div className="quantity-selector">
                <h3>Quantity</h3>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(-1)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => handleQuantityChange(1)}>+</button>
                </div>
              </div>
              <div className='all-products-btn align-self-center mt-1'>
                <button className="add-to-cart-btn">
                    Add to Cart
                </button>
              </div>

            </div>
          </div>

          <div className="product-actions">
            <button className="wishlist-btn">
              <i className="fa-regular fa-heart"></i>
              Add to Wishlist
            </button>
          </div>

          <div className="product-details">
            <div className="ingredients">
              <h3>Ingredients</h3>
              <ul>
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="nutrition">
              <h3>Nutrition Information</h3>
              <div className="nutrition-grid">
                <div className="nutrition-item">
                  <span className="label">Calories</span>
                  <span className="value">{product.nutritionInfo.calories}</span>
                </div>
                <div className="nutrition-item">
                  <span className="label">Protein</span>
                  <span className="value">{product.nutritionInfo.protein}</span>
                </div>
                <div className="nutrition-item">
                  <span className="label">Carbs</span>
                  <span className="value">{product.nutritionInfo.carbs}</span>
                </div>
                <div className="nutrition-item">
                  <span className="label">Fat</span>
                  <span className="value">{product.nutritionInfo.fat}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 