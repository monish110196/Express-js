const userDao = require('../daos/userDao');

exports.createUser = async (userData) => {
  return await userDao.createUser(userData);
};

exports.getAllUsers = async () => {
  return await userDao.getAllUsers();
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