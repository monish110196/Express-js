const userDao = require('../daos/userDao');
const profileDao = require('../daos/profileDao');

const createUserWithProfile = async (userData, profileData) => {
    const user = await userDao.createUser(userData);
    const profile = await profileDao.createProfile({ ...profileData, user: user._id });

    user.profile = profile._id;
    await user.save();

    return { user, profile };
};

const getUserWithProfile = (userId) => userDao.getUserById(userId);

module.exports = {
    createUserWithProfile,
    getUserWithProfile,
};