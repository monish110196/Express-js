const User = require('../models/userModel');
const CustomError = require('../utils/customError');

exports.
createUser = async (userData) => {
  try{
    const user = new ser(userData);
    if (!user) throw new CustomError("User not save", 404);
    return await user.save();
  }catch (error) {
    console.log("success 2")
    throw error;  // Propagate the error to the service layer
  }
  };
  
  exports.getAllUsers = async () => {
    try{ 
      return await User.find()
      .populate('profile')
      .populate('posts')
      .populate('projects');
    }catch (error){
      throw error;
    }
   
  };
  
  exports.linkProfile = async (userId, profileId) => {
    return await User.findByIdAndUpdate(userId, { profile: profileId });
  };
  
  exports.addPost = async (userId, postId) => {
    return await User.findByIdAndUpdate(userId, { $push: { posts: postId } }); 
  };

  exports.update = async (userId, userData) => {
    return await User.findByIdAndUpdate(userId, userData, { new: true });
  }

 
  exports.delete = async (userId) => {
    return await User.findByIdAndDelete(userId);
  }

  exports.addProjectToUser = async (userId, projectId) => {
    return await User.findByIdAndUpdate(
      userId,
      { $addToSet: { projects: projectId } }, 
      { new: true }
    ).populate('projects');
  };
  

   //Use $addToSet to avoid duplicates
   //$push: Creates an array of values.