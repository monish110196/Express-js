const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
        trim: true, // Removes whitespace from the beginning and end
      },
      model: {
        type: String,
        required: true,
        trim: true,
      },
      processor: {
        type: String,
        required: true, // Example: Intel Core i7, AMD Ryzen 5
      },
      ram: {
        type: Number,
        required: true, // Amount in GB
        min: 1, // Minimum RAM size
      },
      storage: {
        type: String,
        required: true, // Example: 512GB SSD, 1TB HDD
      },
        
           price: {
        type: Number,
        required: true,
        min: 0, // Price cannot be negative
      },
      stock: {
        type: Number,
        required: true,
        min: 0, // Stock cannot be negative
      },
     
      batteryLife: {
        type: String, // Example: "Up to 10 hours"
        default: null,
      }
           
    });

const Laptop = mongoose.model('Laptop', laptopSchema);

module.exports = Laptop;