const mongoose = require("mongoose");

// Schema for Speical Iteams

const coffeeSpeicals = new mongoose.Schema({

  itemId: String, // id of speical item
  itemName: String, // the items name
  itemDescription: String,  // speical item description
  itemPrice: Number, // item price

  numberOfItems: String, // number of inventories
  outOfStock: Boolean,  // once inventories is low
});

module.exports = coffeeSpeicals;