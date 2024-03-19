import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/background-image.jpg')" }}>
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-semibold text-white mb-4">Welcome to our e-commerce website!</h1>
        <p className="text-lg text-white mb-8">Browse our products, sign in to your account, and start shopping!</p>
        
        {/* Call-to-action button */}
        <Link to="/products" className="btn btn-primary inline-block">Shop Now</Link>
      </div>
    </div>
  );
}

export default HomePage;
