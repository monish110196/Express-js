const postService = require('../services/postService');

exports.createPost = async (req, res, next) => {
  try {
    const post = await postService.createPost(req.body);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

exports.getAllPosts = async (req, res,next) =>{
  try{
      const post = await postService.getAllPosts();
      res.status(200).json(post);
  }catch(error){
      next(error);
  }
};

exports.deleteAllPost = async (req, res, next) => {
  try{
      const post = await postService.deleteAllPost();
      res.status(200).json({message: 'successfully deleted'}); 
  }catch(error){
      next(error);
  }
};
