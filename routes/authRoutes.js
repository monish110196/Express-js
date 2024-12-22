const express = require("express");
const authController = require("../controllers/authController");
const authenticate = require('../middleware/authMiddleware');
const roleAuthorization = require("../middleware/roleMiddleware");
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

router.get('/profile', authenticate, (req, res) => {
    res.status(200).json({ message: 'This is a protected route', user: req.user });
});

router.get(
    "/admin/dashboard",
    authenticate, 
    roleAuthorization(["admin"]), // Role-based access
    (req, res) => {
      res.status(200).json({ message: "Welcome to the admin dashboard" });
    }
  );
  
  // Protected route for both admin and regular users
  router.get(
    "/user/dashboard",
    authenticate,
    roleAuthorization(["admin", "user"]),
    (req, res) => {
      res.status(200).json({ message: "Welcome to the user dashboard" });
    }
  );

module.exports = router;