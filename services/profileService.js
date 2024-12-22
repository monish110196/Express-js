const profileDao = require('../daos/profileDao');
const userDao = require('../daos/userDao');

exports.createProfile = async (profileData) => {
  const profile = await profileDao.createProfile(profileData);
  await userDao.linkProfile(profileData.user, profile._id);
  return profile;
};

// exports.createProfile = async (profileData) => {
//   try{
//   const profile = await profileDao.createProfile(profileData);
//   await employeeDao.linkProfile(profileData.user, profile._id);
//   return profile;
//   }catch(error){
//     throw error;
// }
// };

exports.getAllProfiles = async () => {
  try{
      return await profileDao.getAllProfiles();
  }catch(error){
     throw error;
  }
};

exports.deleteAllProfile = async () => {
  try{
      return await profileDao.deleteAllProfile();
  }catch(error){
      throw error;
  }
};

