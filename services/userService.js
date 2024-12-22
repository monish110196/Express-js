const userDao = require('../daos/userDao');
const logger = require('../utils/logger');

exports.createUser = async (userData) => {
  try{
    return await userDao.createUser(userData);
  } catch (error){
    throw error; // Re-throw the error 
  }
};

exports.getAllUsers = async () => {
  logger.info('Service: Fetching users from DAO');
  try {
    const users = await userDao.getAllUsers();
    logger.info(`Service: Retrieved ${users.length} users`);
    return users;
  } catch (error) {
    logger.error(`Service: Error fetching users - ${error.message}`);
    throw error;
  }
};

exports.updateUser = async (userId, userData) => {
  try{
  return await userDao.update(userId, userData);
  }catch(error){
    throw error;
}
};


exports.deleteUser = async (userId) => {
  try{
  return await userDao.delete(userId);
  }catch(error){
    throw error;
}
};

exports.addProjectToUser = async (userId, projectId) => {
  try{
  return await userDao.addProjectToUser(userId, projectId);
  }catch(error){
    throw error;
}
};

exports.deleteAllUser = async () => {
  try{
      return await userDao.deleteAllUser();
  }catch(error){
      throw error;
  }
};