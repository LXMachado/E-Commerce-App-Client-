import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsListingPage from './pages/ProductsListingPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import CheckOutPage from './pages/CheckOutPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import Navbar from './components/Navbar'; // Correct import path
import Footer from './components/Footer'; // Correct import path
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar appears on all pages */}
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsListingPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/order-history" element={<OrderHistoryPage />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
        
        <Footer /> {/* Footer appears on all pages */}
      </div>
    </Router>
  );
}

export default App;
