import React, { useState } from 'react';

function Cart() {
  // Sample cart items state
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 15 },
  ]);

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // Calculate total price of all items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-2">
              <div>
                <p>{item.name}</p>
                <p className="text-gray-500">Price: ${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 font-semibold">Remove</button>
            </div>
          ))}
          <div className="mt-4">
            <p className="font-semibold">Total: ${totalPrice}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
