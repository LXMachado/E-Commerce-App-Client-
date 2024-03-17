// src/components/ProductCard.js

import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      {/* Add more details or actions related to the product */}
    </div>
  );
}

export default ProductCard;
