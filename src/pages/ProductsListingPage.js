import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard'; // Assuming you have a ProductCard component to display each product
import axios from 'axios'; // For making HTTP requests

function ProductsListingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Function to fetch products from the backend API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://your-api-url/products'); // Replace 'http://your-api-url/products' with your actual API endpoint
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Call the fetchProducts function when the component mounts
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsListingPage;
