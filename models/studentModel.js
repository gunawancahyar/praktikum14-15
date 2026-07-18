const db = require('../config/db');

const StudentModel = {
  // Ambil semua data mahasiswa
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM students ORDER BY id DESC');
    return rows;
  },

  // Ambil satu mahasiswa berdasarkan ID
  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM students WHERE id = ?', [id]);
    return rows[0];
  },

  // Tambah mahasiswa baru
  create: async (student) => {
    const { nim, name, email, major, semester } = student;
    const [result] = await db.query(
      'INSERT INTO students (nim, name, email, major, semester) VALUES (?, ?, ?, ?, ?)',
      [nim, name, email, major, semester]
    );
    return result.insertId;
  },

  // Update data mahasiswa
  update: async (id, student) => {
    const { nim, name, email, major, semester } = student;
    const [result] = await db.query(
      'UPDATE students SET nim = ?, name = ?, email = ?, major = ?, semester = ? WHERE id = ?',
      [nim, name, email, major, semester, id]
    );
    return result.affectedRows;
  },

  // Hapus data mahasiswa
  delete: async (id) => {
    const [result] = await db.query('DELETE FROM students WHERE id = ?', [id]);
    return result.affectedRows;
  }
};

module.exports = StudentModel;
