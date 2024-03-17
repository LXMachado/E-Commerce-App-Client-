import React, { useState } from 'react';

function CheckoutPage() {
  // Sample cart data, replace it with actual data fetched from the server
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 50, quantity: 2 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 }
  ]);

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-2">Your Cart:</h3>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <div>{item.name}</div>
              <div>Quantity: {item.quantity}</div>
              <div>${item.price * item.quantity}</div>
            </div>
          ))}
          <div className="font-semibold mt-2">Total: ${totalPrice}</div>
        </div>
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-2">Billing Information:</h3>
          {/* Add your billing form fields here */}
        </div>
      </div>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Proceed to Payment
      </button>
    </div>
  );
}

export default CheckoutPage;
