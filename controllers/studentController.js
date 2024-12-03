const studentService = require('../services/studentService');

class StudentController 
{
  
  async createStudent(req, res) {
    
    try {
      const student = await studentService.createStudent(req.body);
      res.status(201).json(student);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async searchStudent(req, res){
    try{
      const { q } = req.query; // Extract search term (e.g., "?q=John")

      if (!q) {
          return res.status(400).json({ success: false, message: "Search term is required." });
      }
      // Call the service layer
      const results = await studentService.searchStudent(q);

      res.status(200).json({ success: true, data: results });
  } catch (error) {
      res.status(500).json({ success: false, message: error.message });
  }
}

  async getStudentById(req, res) {
  
    try {
      const student = await studentService.getStudentById(req.params.id);
      if (!student) return res.status(404).json({ message: 'Student not found' });
      res.json(student);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async getAllStudents(req, res) {
    try {
      const students = await studentService.getAllStudents();
      res.json(students);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  
  async updateStudent(req, res) {
    try {
      const student = await studentService.updateStudent(req.params.id, req.body);
      if (!student) return res.status(404).json({ message: 'student not found' });
      res.json(student);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  
  async deleteStudent(req, res) {
    try {
      const student = await studentService.deleteStudent(req.params.id);
      if (!student) return res.status(404).json({ message: 'student not found' });
      res.json({ message: 'Student deleted' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new StudentController();

