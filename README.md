# Student Management System

Aplikasi CRUD sederhana untuk mengelola data mahasiswa, dibuat dengan **Node.js, Express, dan MySQL**.

## Struktur Project
```
student-management-system
│
├── config/db.js               # Koneksi ke database MySQL
├── controllers/studentController.js  # Logic request (CRUD)
├── database/student.sql       # Script SQL buat database & tabel
├── models/studentModel.js     # Query database
├── public/index.html          # Frontend sederhana (HTML/JS)
├── routes/studentRoutes.js    # Routing API
├── .env                       # Konfigurasi environment
├── app.js                     # Entry point aplikasi
└── package.json
```

## Cara Menjalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Setup database
Buka MySQL, lalu jalankan isi file `database/student.sql`:
```bash
mysql -u root -p < database/student.sql
```
Atau copy-paste isinya ke MySQL Workbench / phpMyAdmin.

### 3. Atur file `.env`
Sesuaikan dengan kredensial MySQL kamu:
```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=student_management
```

### 4. Jalankan server
```bash
npm start
```
Atau mode development (auto-reload dengan nodemon):
```bash
npm run dev
```

### 5. Buka aplikasi
Akses di browser: **http://localhost:3000**

## API Endpoints

| Method | Endpoint              | Keterangan                |
|--------|------------------------|----------------------------|
| GET    | /api/students           | Ambil semua data mahasiswa |
| GET    | /api/students/:id       | Ambil data mahasiswa by ID |
| POST   | /api/students           | Tambah mahasiswa baru      |
| PUT    | /api/students/:id       | Update data mahasiswa      |
| DELETE | /api/students/:id       | Hapus data mahasiswa       |

### Contoh Body (POST/PUT)
```json
{
  "nim": "2201004",
  "name": "Dewi Anggraini",
  "email": "dewi.anggraini@mail.com",
  "major": "Teknik Informatika",
  "semester": 2
}
```
