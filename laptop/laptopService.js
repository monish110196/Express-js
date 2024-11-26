const laptopDao = require('./laptopDao');

class LaptopService {
 
  
  async createLaptop(laptopData) {
    return await laptopDao.create(laptopData);
  }

  
  async getLaptopById(laptopId) {
    return await laptopDao.getById(laptopId);
  }

  
  async getAllLaptops() {
    return await laptopDao.getAll();
  }

  
  async updateLaptop(laptopId, laptopData) {
    return await laptopDao.update(laptopId, laptopData);
  }

 
  async deleteLaptop(laptopId) {
    return await laptopDao.delete(laptopId);
  }
}

module.exports = new LaptopService();


//The service layer will interact with the DAO layer to fetch, modify, and delete books.
//  It will also contain business logic for managing books.