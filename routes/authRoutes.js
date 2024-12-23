const express = require("express");
const authController = require("../controllers/authController");
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

router.get('/profile', verifyToken, (req, res) => {
    res.status(200).json({ message: 'This is a protected route', user: req.user });
});



module.exports = router;