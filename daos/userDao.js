const User = require('../models/userModel');

const createUser = (userData) => User.create(userData);

const getUserById = (userId) => User.findById(userId); 

const updateUser = (userId, updateData) => User.findByIdAndUpdate(userId, updateData, { new: true });

module.exports = {
    createUser,
    getUserById,
    updateUser,
};