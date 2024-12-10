const projectService = require('../services/projectService');

exports.createProject = async (req, res) => {
  try {
    const project = await projectService.createProject(req.body);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: 'Error creating project', error: err.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await projectService.getAllProjects();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching projects', error: err.message });
  }
};

exports.addUserToProject = async (req, res) => {
  try {
    const project = await projectService.addUserToProject(req.params.id, req.body.userId);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ message: 'Error adding user to project', error: err.message });
  }
};