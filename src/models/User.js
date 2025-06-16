const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,  // hashed
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
