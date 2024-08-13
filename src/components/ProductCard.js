import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={product.image} alt={product.name} /></figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="text-lg font-semibold">Price: ${product.price}</p>
        <p className="text-sm">Quantity: {product.quantity}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
