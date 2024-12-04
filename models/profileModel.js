const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    age: { type: Number, required: true },
    address: { type: String, required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true } // Reference back to User
});

module.exports = mongoose.model('Profile', profileSchema);