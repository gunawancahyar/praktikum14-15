const mysql = require('mysql2');
require('dotenv').config();

// Membuat connection pool ke MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'student_management',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Gunakan versi promise agar bisa pakai async/await
const db = pool.promise();

// Tes koneksi saat aplikasi start
pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Gagal koneksi ke database:', err.message);
    return;
  }
  console.log('✅ Berhasil terhubung ke database MySQL');
  connection.release();
});

module.exports = db;
