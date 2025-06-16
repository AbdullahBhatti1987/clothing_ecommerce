"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductManager() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", category: "", image: "" });

  useEffect(() => {
    axios.get("/api/products").then(res => setProducts(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/products", form);
    setForm({ name: "", price: "", category: "", image: "" });
    const updated = await axios.get("/api/products");
    setProducts(updated.data);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>

      <form onSubmit={handleSubmit} className="grid gap-2 mb-6">
        <input
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="border p-2 rounded"
        />
        <button className="bg-blue-600 text-white py-2 rounded">Add Product</button>
      </form>

      <ul>
        {products.map((p) => (
          <li key={p._id} className="mb-2 border-b p-2">
            {p.name} (${p.price}) - {p.category}
          </li>
        ))}
      </ul>
    </div>
  );
}
