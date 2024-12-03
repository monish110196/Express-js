const laptopService = require('../services/laptopService');

class LaptopController 
{
  
  async createLaptop(req, res) {
    
    try {
      console.log(req.body);
      const laptop = await laptopService.createLaptop(req.body);
      res.status(201).json(laptop);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };


  async getLaptopById(req, res) {
  
    try {
      const laptop = await laptopService.getLaptopById(req.params.id);
      if (!laptop) return res.status(404).json({ message: 'Laptop not found' });
      res.json(laptop);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async getAllLaptops(req, res) {
    try {
      const laptops = await laptopService.getAllLaptops();
      res.json(laptops);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  
  async updateLaptop(req, res) {
    try {
      const laptop = await laptopService.updateLaptop(req.params.id, req.body);
      if (!laptop) return res.status(404).json({ message: 'Laptop not found' });
      res.json(laptop);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  
  async deleteLaptop(req, res) {
    try {
      const laptop = await laptopService.deleteLaptop(req.params.id);
      if (!laptop) return res.status(404).json({ message: 'Laptop not found' });
      res.json({ message: 'Laptop deleted' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new LaptopController();

//The controller layer will interact with the service layer to handle HTTP requests and responses.