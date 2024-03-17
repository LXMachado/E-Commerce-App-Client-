import React from 'react';

function OrderHistoryPage() {
  // Sample order data, replace it with actual data fetched from the server
  const orders = [
    {
      id: 1,
      date: '2024-03-17',
      total: 100,
      items: [
        { id: 1, name: 'Product 1', quantity: 2, price: 50 },
        { id: 2, name: 'Product 2', quantity: 1, price: 50 }
      ]
    },
    {
      id: 2,
      date: '2024-03-16',
      total: 75,
      items: [
        { id: 3, name: 'Product 3', quantity: 1, price: 25 },
        { id: 4, name: 'Product 4', quantity: 3, price: 50 }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Order History</h2>
      {orders.map(order => (
        <div key={order.id} className="border rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <div>Order ID: {order.id}</div>
            <div>Date: {order.date}</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {order.items.map(item => (
              <div key={item.id} className="border p-2">
                <div>Name: {item.name}</div>
                <div>Quantity: {item.quantity}</div>
                <div>Price: ${item.price}</div>
              </div>
            ))}
          </div>
          <div className="font-semibold mt-2">Total: ${order.total}</div>
        </div>
      ))}
    </div>
  );
}

export default OrderHistoryPage;
