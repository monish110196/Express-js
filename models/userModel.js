const mongoose = require('mongoose');
const logger = require('../utils/logger');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "manager", "admin"], default: "user" },  
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }, // One-to-One
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],     // One-to-Many
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }] // Many-to-Many
});

userSchema.pre('save', function (next) {
  logger.info(`Model: Saving user ${this.name}`);
  next();
});

module.exports = mongoose.model('User', userSchema);