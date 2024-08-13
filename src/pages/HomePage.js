import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: "url('/background-image.jpg')" }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-red-500 text-5xl font-bold">Welcome to our e-commerce website!</h1>
          <p className="mb-5">Browse our products, sign in to your account, and start shopping!</p>
          
          {/* Call-to-action button */}
          <Link to="/products" className="btn btn-primary">Shop Now</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
