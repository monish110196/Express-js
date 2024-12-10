const Project = require('../models/projectModel');

exports.createProject = async (projectData) => {
    const project = new Project(projectData);
    return await project.save();
  };

  exports.getAllProjects = async () => {
    return await Project.find().populate('users');
  };
  
  exports.addUserToProject = async (projectId, userId) => {
    return await Project.findByIdAndUpdate(
      projectId,
      { $addToSet: { users: userId } },
      { new: true }
    );
  };
  