const Laptop = require('../models/laptopModel');

class LaptopDao {


  
  async create(laptopData) {
    const laptop = new Laptop(laptopData);
    return await laptop.save();
  }

  async getById(laptopId) {
    return await Laptop.findById(laptopId);
  }

  async getAll() {
    return await Laptop.find();
  }

  async update(laptopId, laptopData) {
    return await Laptop.findByIdAndUpdate(laptopId, laptopData, { new: true });
  }

 
  async delete(laptopId) {
    return await Laptop.findByIdAndDelete(laptopId);
  }
}

module.exports = new LaptopDao();

//The DAO layer will contain the data access logic (CRUD operations) to interact with the MongoDB database.
//DAO Data Access Object