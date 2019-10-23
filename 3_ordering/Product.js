const mongoose = require("mongoose");

// Coffee Speical is a second Schema imported. 
const coffeeSpeicals = require("./CoffeeSpeicals");


const productSchema = new mongoose.Schema({

  createdTime: { type: Date, default: Date.now }, // Time stamp

  productId: String, // id stamp
  productName: String, // products name, in this case Coffee
  description: String, // description of the product
  numberOfCups: String, // number of items to the order

  withDariyMilk: Boolean, // dariry milk option
  withSkimMilk: Boolean, // skin milk option
  withAlmondMilk: Boolean, // almond milk option

  cupSize: String, // cup size 
  numberSugar: String, // added sugar/s

  coffeeSpeicals: [coffeeSpeicals], //CoffeeSpeical scehema for extra items 

  cost: Number, // total order cost

  imageUrls: [String], // optional for image url
  storeTrade: String, // to track point of sale
  sold: Boolean, // confirmation of the payment
  delivered: Boolean, // after sale has completed, payment processed customer has received their order
});

module.exports = mongoose.model("Product", productSchema);