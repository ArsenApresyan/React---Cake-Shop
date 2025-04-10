import React from 'react';
import ProductListItem from '../ProductListItem';
import './ProductsList.css';

const ProductsList = ({ products, onAddToCart, onQuickView, onAddToWishlist }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onQuickView={onQuickView}
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  );
};

export default ProductsList; 