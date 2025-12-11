const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  userId: mongoose.Schema.Types.ObjectId, //Link to user
}, {
  timestamps: true  // This automatically adds createdAt and updatedAt fields
});

module.exports = { OrdersSchema };