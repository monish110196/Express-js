const profileDao = require('../daos/profileDao');

const getProfileWithUser = (profileId) => profileDao.getProfileById(profileId);

module.exports = {
    getProfileWithUser,
};