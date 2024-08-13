import React, { useState } from 'react';

function CheckoutPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 50, quantity: 2 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 }
  ]);

  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Cart Items Section */}
        {cartItems.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price} x {item.quantity}</p>
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div>Total Price: ${totalPrice}</div>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Proceed to Payment
      </button>
    </div>
  );
}

export default CheckoutPage;
