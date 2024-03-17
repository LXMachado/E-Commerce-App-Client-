// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold">Welcome to our e-commerce website!</h1>
      <p className="mt-4 text-lg">Browse our products, sign in to your account, and start shopping!</p>
      
      {/* Navigation Links */}
      <div className="mt-8">
        <Link to="/products" className="text-blue-500 mr-4">View Products</Link>
        <Link to="/login" className="text-blue-500 mr-4">Login</Link>
        <Link to="/registration" className="text-blue-500">Register</Link>
      </div>
    </div>
  );
}

export default HomePage;
