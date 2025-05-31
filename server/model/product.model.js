const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    Description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
