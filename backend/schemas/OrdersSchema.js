// const mongoose = require("mongoose");

// const OrdersSchema = new mongoose.Schema({
//   name: String,
//   qty: Number,
//   price: Number,
//   mode: String,
//   userId: mongoose.Schema.Types.ObjectId, //Link to user
// }, {
//   timestamps: true  // This automatically adds createdAt and updatedAt fields
// });

// module.exports = { OrdersSchema };

const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    mode: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",   // reference user collection
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = { OrdersSchema };
