const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  address: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  users: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Post', postSchema);


 //employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }