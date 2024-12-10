const Post = require('../models/postModel');

exports.createPost = async (postData) => {
    const post = new Post(postData);
    return await post.save();
  };
  