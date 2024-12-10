const Profile = require('../models/profileModel');


exports.createProfile = async(profileData) => {
  try {
    const profile = new Profile(profileData); // Create a new Profile object
    return await profile.save(); // Save the profile
  } catch (error) {
    throw new Error(`Error saving profile: ${error.message}`);
  }
};
// let saveProfile = async (profile) => {
//   let profileObj = new Profile();
//   profileObj.bio = profile?.bio;
//   profileObj.age = profile?.age;
//   await profileObj.save()
// }

// let profile = req.body;
//   console.log("profile -->", profile);
//   saveProfile(profile).then(data => {
//     console.log("data -->",data)
//     res.send(data)