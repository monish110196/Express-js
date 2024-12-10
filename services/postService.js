const postDao = require('../daos/postDao');
const userDao = require('../daos/userDao');


exports.createPost = async (postData) => {
  const post = await postDao.createPost(postData);
  await userDao.addPost(postData.user, post._id);
  return post;
};