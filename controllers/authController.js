const authService = require("../services/authService");


class AuthController {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;
      const user = await authService.registerUser(name, email, password);
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await authService.authenticate(email, password);
      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
}

module.exports = new AuthController();





//  const { token } = await authService.loginUser(email, password);