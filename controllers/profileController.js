const profileService = require('../services/profileService');

const getProfile = async (req, res) => {
    try {
        const profile = await profileService.getProfileWithUser(req.params.id);

        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }

        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching profile', error });
    }
};

module.exports = {
    getProfile,
};