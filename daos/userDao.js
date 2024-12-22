const User = require('../models/userModel');
const CustomError = require('../utils/customError');
const logger = require('../utils/logger');



exports.findUserByEmail = async (email) => {
try{
  return await User.findOne({ email });
}catch (error) {
  throw error;
}
};

exports.getById = async (UserId) => {
  try{
  return await User.findById(UserId);
}catch (error) {
  throw error;
}
};

exports.
createUser = async (userData) => {
  try{
    const user = new User(userData);
    return await user.save();
  }catch (error) {
    throw error;  // Propagate the error to the service layer
  }
  };
  
  exports.
  getAllUsers = async () => {
    logger.info('DAO: Querying database for users');
    try{
    const users = await User.find()
      .populate('profile')
      .populate('posts')
      .populate('projects');
      logger.info(`DAO: Found ${users.length} users in the database`);
      return users;
     }catch (error){
      logger.error(`DAO: Error querying database - ${error.message}`);
      throw error;
    }
   
  };
  
  exports.linkProfile = async (userId, profileId) => {
    try{
    return await User.findByIdAndUpdate(userId, { profile: profileId });
    }catch (error){
      throw error;
   }
  };
  
  exports.addPost = async (userId, postId) => {
    try{
    return await User.findByIdAndUpdate(userId, { $push: { posts: postId } }); 
    }catch (error){
      throw error;
   }
  };

  exports.update = async (userId, userData) => {
    try{
    return await User.findByIdAndUpdate(userId, userData, { new: true });
    }catch (error){
      throw error;
   }
  };

 
  exports.delete = async (userId) => {
    try{
    return await User.findByIdAndDelete(userId);
    }catch (error){
      throw error;
   }
  };

  exports.addProjectToUser = async (userId, projectId) => {
    try{
    return await User.findByIdAndUpdate(
      userId,
      { $addToSet: { projects: projectId } }, 
      { new: true }
    ).populate('projects');
  }catch (error){
    throw error;
 }
  };

  exports.deleteAllUser = async () => {
    try{
        return await User.deleteMany()
    }catch (error){
       throw error;
    }
};
  

   //Use $addToSet to avoid duplicates
   //$push: Creates an array of values.