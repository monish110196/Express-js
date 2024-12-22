const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userDao = require("../daos/userDao");
require("dotenv").config();

class AuthService {
  // Register user
  async registerUser(name, email, password, role) {
    const existingUser = await userDao.findUserByEmail(email);
    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(password, 5);
    return await userDao.createUser({ name, email, password: hashedPassword });
  }

  // Login user
  async authenticate(email, password) {
    const user = await userDao.findUserByEmail(email);
    console.log("user==="+user)
    if(user){
    }else{
    if (!user) throw new Error("Invalid email");
    }

 
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid password");
    

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return { token };
  } 
}

module.exports = new AuthService();