const profileService = require('../services/profileService');

exports.createProfile = async (req, res, next) => {
  try {
    const profile = await profileService.createProfile(req.body);
    res.status(201).json(profile);
  }catch(error){
    next(error);
  }
};

exports.getAllProfiles = async (req, res,next) =>{
  try{
      const profile = await profileService.getAllProfiles();
      res.status(200).json(profile);
  }catch(error){
      next(error);
  }
};

exports.deleteAllProfile = async (req, res, next) => {
  try{
      const profile = await profileService.deleteAllProfile();
      res.status(200).json({message: 'successfully deleted'}); 
  }catch(error){
      next(error);
  }
};
