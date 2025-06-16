"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function OfferManager() {
  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({ title: "", description: "", discountPercent: "" });

  useEffect(() => {
    axios.get("/api/offers").then((res) => setOffers(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/offers", newOffer);
    setNewOffer({ title: "", description: "", discountPercent: "" });
    const updated = await axios.get("/api/offers");
    setOffers(updated.data);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Special Offers</h2>

      <form onSubmit={handleSubmit} className="grid gap-2 mb-6">
        <input
          placeholder="Title"
          value={newOffer.title}
          onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          placeholder="Description"
          value={newOffer.description}
          onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          placeholder="Discount %"
          value={newOffer.discountPercent}
          onChange={(e) => setNewOffer({ ...newOffer, discountPercent: e.target.value })}
          className="border p-2 rounded"
        />
        <button className="bg-green-600 text-white py-2 rounded">Add Offer</button>
      </form>

      <ul>
        {offers.map((offer) => (
          <li key={offer._id} className="mb-2 border-b p-2">
            {offer.title} ({offer.discountPercent}%)
          </li>
        ))}
      </ul>
    </div>
  );
}
