const projectDao = require('../daos/projectDao');

exports.createProject = async (projectData) => {
  return await projectDao.createProject(projectData);
};

exports.getAllProjects = async () => {
  return await projectDao.getAllProjects();
};

exports.addUserToProject = async (projectId, userId) => {
  return await projectDao.addUserToProject(projectId, userId);
};
