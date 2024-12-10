const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }, // One-to-One
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],     // One-to-Many
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }] // Many-to-Many
});

module.exports = mongoose.model('User', userSchema);