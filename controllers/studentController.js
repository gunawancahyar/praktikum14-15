const StudentModel = require('../models/studentModel');

const studentController = {
  // GET semua mahasiswa
  getAllStudents: async (req, res) => {
    try {
      const students = await StudentModel.getAll();
      res.status(200).json({ success: true, data: students });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // GET mahasiswa by ID
  getStudentById: async (req, res) => {
    try {
      const student = await StudentModel.getById(req.params.id);
      if (!student) {
        return res.status(404).json({ success: false, message: 'Mahasiswa tidak ditemukan' });
      }
      res.status(200).json({ success: true, data: student });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // POST tambah mahasiswa
  createStudent: async (req, res) => {
    try {
      const { nim, name, email, major, semester } = req.body;

      if (!nim || !name || !email) {
        return res.status(400).json({ success: false, message: 'NIM, nama, dan email wajib diisi' });
      }

      const id = await StudentModel.create({ nim, name, email, major, semester });
      res.status(201).json({ success: true, message: 'Mahasiswa berhasil ditambahkan', id });
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ success: false, message: 'NIM atau email sudah terdaftar' });
      }
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // PUT update mahasiswa
  updateStudent: async (req, res) => {
    try {
      const { nim, name, email, major, semester } = req.body;
      const affectedRows = await StudentModel.update(req.params.id, { nim, name, email, major, semester });

      if (affectedRows === 0) {
        return res.status(404).json({ success: false, message: 'Mahasiswa tidak ditemukan' });
      }
      res.status(200).json({ success: true, message: 'Data mahasiswa berhasil diperbarui' });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // DELETE mahasiswa
  deleteStudent: async (req, res) => {
    try {
      const affectedRows = await StudentModel.delete(req.params.id);
      if (affectedRows === 0) {
        return res.status(404).json({ success: false, message: 'Mahasiswa tidak ditemukan' });
      }
      res.status(200).json({ success: true, message: 'Data mahasiswa berhasil dihapus' });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
};

module.exports = studentController;
