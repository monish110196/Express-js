const postDao = require('../daos/postDao');
const userDao = require('../daos/userDao');


exports.createPost = async (postData) => {
  const post = await postDao.createPost(postData);
  await userDao.addPost(postData.user, post._id);
  return post;
};

// exports.createPost = async (postData) => {
//   const post = await postDao.createPost(postData);
//   await employeeDao.addPost(postData.employee, post._id);
//   return post;
// };

exports.getAllPosts = async () => {
  try{
      return await postDao.getAllPosts();
  }catch(error){
     throw error;
  }
};

exports.deleteAllPost = async () => {
  try{
      return await postDao.deleteAllPost();
  }catch(error){
      throw error;
  }
};

