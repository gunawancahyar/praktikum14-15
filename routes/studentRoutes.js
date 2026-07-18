const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// CRUD Routes
router.get('/', studentController.getAllStudents);       // GET semua data
router.get('/:id', studentController.getStudentById);    // GET data by id
router.post('/', studentController.createStudent);       // POST tambah data
router.put('/:id', studentController.updateStudent);     // PUT update data
router.delete('/:id', studentController.deleteStudent);  // DELETE hapus data

module.exports = router;
