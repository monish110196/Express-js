const userDao = require('../daos/userDao');

exports.createUser = async (userData) => {
  try{
    return await serDao.createUser(userData);
  } catch (error){
   console.log("success 1")
    throw error; // Re-throw the error 
  }
};

exports.getAllUsers = async () => {
  try{
    return await userDao.getAllUsers();
  }catch (error) {
    throw error;
  }
};

exports.updateUser = async (userId, userData) => {
  return await userDao.update(userId, userData);
};


exports.deleteUser = async (userId) => {
  return await userDao.delete(userId);
};

exports.addProjectToUser = async (userId, projectId) => {
  return await userDao.addProjectToUser(userId, projectId);
};