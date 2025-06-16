const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String, // e.g., 'men', 'women', 'kids', 'winter', 'summer'
  image: String,    // Cloudinary URL
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Product || mongoose.model("Product", ProductSchema);
