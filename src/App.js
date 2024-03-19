import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import the enhanced HomePage component
import ProductsListingPage from './pages/ProductsListingPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import CheckOutPage from './pages/CheckOutPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <Router>
      <div>
        {/* Your navbar, header, or other common components can go here */}
        
        {/* Define your routes */}
        <Routes>
          {/* Replace the existing HomePage route with the enhanced version */}
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsListingPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/checkOut" element={<CheckOutPage />} />
          <Route path="/order-history" element={<OrderHistoryPage />} />
          
          {/* Add a catch-all route for 404 errors */}
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
