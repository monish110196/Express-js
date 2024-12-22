const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  bio: { type: String, required: true },
  age: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true }
});

module.exports = mongoose.model('Profile', profileSchema);



//unique: true
//employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', unique: true }