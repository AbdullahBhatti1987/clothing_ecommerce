const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
  title: String,
  description: String,
  discountPercent: Number,
  active: { type: Boolean, default: true }
});

module.exports = mongoose.models.Offer || mongoose.model("Offer", OfferSchema);
