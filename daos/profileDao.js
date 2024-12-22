const Profile = require('../models/profileModel');
const customError = require('../utils/customError');


exports.createProfile = async(profileData) => {
  try {
    const profile = new Profile(profileData); // Create a new Profile object
    return await profile.save(); // Save the profile
  } catch (error) {
    throw error;
  }
};

exports.getAllProfiles = async () => {
  try{
      return await Profile.find().populate('user');
  }catch(error){
      throw error;
  }
};

exports.deleteAllProfile = async () => {
  try{
      return await Profile.deleteMany()
  }catch (error){
     throw error;
  }
};
