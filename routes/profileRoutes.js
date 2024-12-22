const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');


router.post('/', profileController.createProfile);
router.get('/', profileController.getAllProfiles);
router.delete('/', profileController.deleteAllProfile);



module.exports = router;