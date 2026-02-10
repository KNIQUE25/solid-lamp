// src/components/ProductCard.jsx
import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <button 
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={toggleWishlist}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          {isWishlisted ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="product-info">
        <span className="product-brand">{product.brand}</span>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-specs">
          {product.specs.map((spec, index) => (
            <span key={index} className="product-spec">{spec}</span>
          ))}
        </div>
        <div className="product-price">
          <span className="current-price">KES {product.price.current.toLocaleString()}</span>
          {product.price.original && (
            <span className="original-price">KES {product.price.original.toLocaleString()}</span>
          )}
          {product.discount && (
            <span className="discount-badge">{product.discount}% OFF</span>
          )}
        </div>
        <div className="product-actions">
          <button className="btn-add-to-cart">Add to Cart</button>
          <button className="btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;