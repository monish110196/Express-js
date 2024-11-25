const mongoose = require('mongoose');


const laptopSchema = new mongoose.Schema({
    brand: String,
    model: String,
    processor: String,
    ram: String,
    storage: String,
    price: Number
  });

  const Laptop = mongoose.model("Laptop", laptopSchema);

  module.exports = Laptop;


