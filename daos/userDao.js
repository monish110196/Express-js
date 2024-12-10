const User = require('../models/userModel');

exports.
createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
  };
  
  exports.getAllUsers = async () => {
    return await User.find()
      .populate('profile')
      .populate('posts')
      .populate('projects');
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