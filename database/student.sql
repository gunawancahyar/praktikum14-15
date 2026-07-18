-- Membuat database
CREATE DATABASE IF NOT EXISTS student_management;
USE student_management;

-- Membuat tabel students
CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nim VARCHAR(20) NOT NULL UNIQUE,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  major VARCHAR(100) DEFAULT NULL,
  semester INT DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Data contoh (opsional)
INSERT INTO students (nim, name, email, major, semester) VALUES
('2201001', 'Andi Saputra', 'andi.saputra@mail.com', 'Teknik Informatika', 3),
('2201002', 'Budi Santoso', 'budi.santoso@mail.com', 'Sistem Informasi', 5),
('2201003', 'Citra Lestari', 'citra.lestari@mail.com', 'Teknik Informatika', 1);
