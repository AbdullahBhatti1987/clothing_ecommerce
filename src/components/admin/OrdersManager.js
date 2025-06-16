"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function OrdersManager() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders").then((res) => setOrders(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id} className="mb-4 border-b p-2">
              <strong>User:</strong> {order.user.email} <br />
              <strong>Items:</strong> {order.products.length} <br />
              <strong>Total:</strong> ${order.total} <br />
              <strong>Status:</strong> {order.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
