const Post = require('../models/postModel');
const customError = require('../utils/customError');

exports.createPost = async (postData) => {
  try{
    const post = new Post(postData);
    return await post.save();
  }catch(error){
    throw error;
  }
  };

  exports.getAllPosts = async () => {
    try{
        return await Post.find().populate('users');
    }catch(error){
        throw error;
    }
  };
  
  exports.deleteAllPost = async () => {
    try{
        return await Post.deleteMany()
    }catch (error){
       throw error;
    }
  };
  