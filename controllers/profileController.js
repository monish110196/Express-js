const profileService = require('../services/profileService');

exports.createProfile = async (req, res) => {
  try {
    const profile = await profileService.createProfile(req.body);
    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ message: 'Error creating profile', error: err.message });
  }
};