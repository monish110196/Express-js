const student = require('../models/studentModel');

class StudentDao {

  async create(studentData) {
    const Student = new student(studentData);
    return await Student.save();
  }

  async searchStudents(searchTerm) {
    // Perform a text search in the database
    return await student.find({
      $text: { $search: searchTerm },
  });
  }

  async getById(studentId) {
    return await student.findById(studentId);
  }
  


  async getAll() {
    return await student.find();
  }

  async update(studentId, studentData) {
    return await student.findByIdAndUpdate(studentId, studentData,{ new: true });
  }

 
  async delete(studentId) {
    return await student.findByIdAndDelete(studentId);
  }
}

module.exports = new StudentDao();
