const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

router.post('/student', studentController.createStudent);


router.get('/search', studentController.searchStudent);


router.get('/students/:id', studentController.getStudentById);


router.get('/students', studentController.getAllStudents);


router.put('/students/:id', studentController.updateStudent);


router.delete('/students/:id', studentController.deleteStudent);

module.exports = router;
