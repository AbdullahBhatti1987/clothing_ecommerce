const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{ productId: String, name: String, qty: Number, price: Number }],
  totalAmount: Number,
  status: { type: String, default: 'pending' }, // 'pending', 'shipped', 'delivered'
  paymentMethod: { type: String, default: 'COD' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Order || mongoose.model("Order", OrderSchema);
