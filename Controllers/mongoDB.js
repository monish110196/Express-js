const mongoose = require('mongoose');
require('dotenv').config(); 

const uri = process.env.MONGODB_URI || "mongodb+srv://dhinavollmoon:dtXO6D8fFoQZ6qxI@dhina-mongoose.5bebs.mongodb.net/monish?retryWrites=true&w=majority&appName=dhina-mongoose";

async function connectToDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas with Mongoose!");

    
    
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}


module.exports = connectToDB;