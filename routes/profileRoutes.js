const express = require('express');
const profileController = require('../controllers/profileController');

const router = express.Router();

router.get('/:id', profileController.getProfile);

module.exports = router;