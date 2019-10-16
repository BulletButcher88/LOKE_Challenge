const mongoose = require("mongoose");

// Schema for Speical Iteams 

const coffeeSpeicals = new mongoose.Schema({
  itemId: String, //date to conduct survey of the job
  itemName: String, // the person who is following up this time
  itemDescription: String,
  itemPrice: Number,

  // Inventory and record keeping
  numberOfItems: String,
  outOfStock: Boolean,
});

module.exports = coffeeSpeicals;