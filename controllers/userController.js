const UserService = require('../services/userService');
const logger = require('../utils/logger');

exports.createUser = async (req, res, next) => {
  try {
    const user = await UserService.createUser(req.body);
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
    //res.status(400).json({ message: 'Error creating user', error: err.message });
  }
};

exports.getAllUsers = async (req, res, next) => { 
  logger.info('Controller: Fetching all users');
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json({ success: true, data: users });
    logger.info('Controller: Successfully fetched users');
  } catch (error) {
    logger.error(`Controller: Error fetching users - ${error.message}`);
    next(error);
  }
};

exports.updateUser = async (req, res, next) =>{
  try {
    const user  = await UserService.updateUser(req.params.id, req.body);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    next(error);
  }
};


exports.deleteUser = async (req, res, next) => {
  try {
    const user = await UserService.deleteUser(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (error) {
    next(error);
  }
};

exports.addProjectToUser = async (req, res) => {
  try {
    const user = await UserService.addProjectToUser(req.params.id, req.body.projectId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

exports.deleteAllUser = async (req, res, next) => {
  try{
      const user = await UserService.deleteAllUser();
      res.status(200).json({message: 'successfully deleted'}); 
  }catch(error){
      next(error);
  }
};