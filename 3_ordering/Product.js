const mongoose = require("mongoose");

// Speical items Schema 
const coffeeSpeicals = require("./CoffeeSpeicals");


const productSchema = new mongoose.Schema({
  // Time stamp
  createdTime: { type: Date, default: Date.now },

  // Product details
  productId: String,
  productName: String,
  description: String,
  numberOfCups: String,

  withDariyMilk: Boolean,
  withSkimMilk: Boolean,
  withAlmondMilk: Boolean,  

  cupSize: String,
  numberSugar: String,

  coffeeSpeicals: [coffeeSpeicals],
  cost: Number,

 // Inventory, shopping cart and record keeping
  imageUrls: [String],
  storeTrade: String,
  sold: Boolean,
  inProgress: Boolean,
});

module.exports = mongoose.model("Product", productSchema);