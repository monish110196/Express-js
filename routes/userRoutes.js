const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const verifyToken = require('../middleware/authMiddleware');
const roleAuthorization = require("../middleware/roleMiddleware");
const logger = require('../utils/logger');

router.get(
  "/admin/dashboard",
  verifyToken , 
  roleAuthorization(["admin"]),
  (req, res) => {
    res.status(200).json({ message: "Welcome to the admin dashboard" });
  }
);

router.get(
  "/manager/dashboard",
  verifyToken , 
  roleAuthorization(["manager", "admin"]), 
  (req, res) => {
    res.status(200).json({ message: "Welcome to the admin dashboard" });
  }
);

// Protected route for both admin and regular users
router.get(
  "/user/dashboard",
  verifyToken ,
  roleAuthorization(["user", "manager", "admin"]),
  (req, res) => {
    res.status(200).json({ message: "Welcome to the user dashboard" });
  }
);


router.post('/', UserController.createUser);
router.get('/:id',UserController.getUserById );

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