const express = require('express');
const laptopController = require('../controllers/laptopController');
const router = express.Router();


router.post('/laptop', laptopController.createLaptop);


router.get('/laptop/:id', laptopController.getLaptopById);


router.get('/laptop', laptopController.getAllLaptops);


router.put('/laptop/:id', laptopController.updateLaptop);


router.delete('/laptop/:id', laptopController.deleteLaptop);

module.exports = router;

//The routes layer defines the HTTP endpoints for the books and maps them to controller methods.