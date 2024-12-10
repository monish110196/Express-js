const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/', projectController.createProject);
router.get('/', projectController.getAllProjects);
router.post('/:id/users', projectController.addUserToProject);


module.exports = router;