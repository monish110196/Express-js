const studentDao = require('../daos/studentDao');

class StudentService {
 
  
  async createStudent(studentData) {
    return await studentDao.create(studentData);
  }

  async searchStudent(searchTerm) {
    return await studentDao.searchStudents(searchTerm);
  }
  
  async getStudentById(studentId) {
    return await studentDao.getById(studentId);
  }

  
  async getAllStudents() {
    return await studentDao.getAll();
  }

  
  async updateStudent(studentId, studentData) {
    return await studentDao.update(studentId, studentData);
  }

 
  async deleteStudent(studentId) {
    return await studentDao.delete(studentId);
  }
}

module.exports = new StudentService();


//The service layer will interact with the DAO layer to fetch, modify, and delete books.
//  It will also contain business logic for managing books.