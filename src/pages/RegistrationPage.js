import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and Route components from React Router
import LoginPage from './pages/LoginPage'; // Import LoginPage component
import RegistrationPage from './pages/RegistrationPage'; // Import RegistrationPage component
import ProductsListingPage from './pages/ProductsListingPage'; // Import ProductsListingPage component
import ProductDetailsPage from './pages/ProductDetailsPage'; // Import ProductDetailsPage component
import CheckoutPage from './pages/CheckoutPage'; // Import CheckoutPage component
import OrderHistoryPage from './pages/OrderHistoryPage'; // Import OrderHistoryPage component
// Import other necessary components or pages

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define your routes */}
        <Switch>
          {/* Route for Login page */}
          <Route path="/login" component={LoginPage} />
          
          {/* Route for Registration page */}
          <Route path="/register" component={RegistrationPage} />

          {/* Route for Products Listing page */}
          <Route path="/products" component={ProductsListingPage} />

          {/* Route for Product Details page */}
          <Route path="/product/:id" component={ProductDetailsPage} />

          {/* Route for Checkout page */}
          <Route path="/checkout" component={CheckoutPage} />

          {/* Route for Order History page */}
          <Route path="/order-history" component={OrderHistoryPage} />

          {/* Add more routes for other pages/components */}

          {/* Default route */}
          <Route path="/" component={ProductsListingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
