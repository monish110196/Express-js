const profileDao = require('../daos/profileDao');
const userDao = require('../daos/userDao');

exports.createProfile = async (profileData) => {
  const profile = await profileDao.createProfile(profileData);
  await userDao.linkProfile(profileData.user, profile._id);
  return profile;
};
