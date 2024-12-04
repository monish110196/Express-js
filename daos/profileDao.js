const Profile = require('../models/profileModel');

const createProfile = (profileData) => Profile.create(profileData);

const getProfileById = (profileId) => Profile.findById(profileId).populate('user');

const updateProfile = (profileId, updateData) => Profile.findByIdAndUpdate(profileId, updateData, { new: true });

module.exports = {
    createProfile,
    getProfileById,
    updateProfile,
};