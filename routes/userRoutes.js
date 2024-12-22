const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const logger = require('../utils/logger');

router.post('/', UserController.createUser);
router.get('/', async (req, res, next) => {
    logger.info('GET /users request received');
    try {
      await UserController.getAllUsers(req, res, next);
    } catch (error) {
      logger.error(`Error in route /users: ${error.message}`);
      next(error);
    }
  });
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
router.post('/:id/projects', UserController.addProjectToUser);
router.delete('/', UserController.deleteAllUser);

module.exports = router;