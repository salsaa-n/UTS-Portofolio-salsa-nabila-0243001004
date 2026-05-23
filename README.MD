 Nama : Salsa Nabila
 Nim  : 0243001004
 
 
 Portfolio Pribadi - Tugas UTS Pemrograman Web

Proyek ini merupakan tugas Ujian Tengah Semester mata kuliah Pemrograman Web, berupa website profil pribadi berbasis **Full Stack** yang dibangun menggunakan teknologi **Vue.js**, **Node.js / Express.js**, dan **Database SQLite**. Seluruh data pada website dimuat secara dinamis dari database melalui layanan API.

---

-Deskripsi Proyek

Website ini dirancang untuk menampilkan profil diri secara lengkap, meliputi data identitas, keahlian yang dimiliki, riwayat pengalaman, serta daftar portofolio proyek yang pernah dikerjakan. Tampilan dibuat responsif agar nyaman dilihat di berbagai perangkat, dilengkapi fitur mode terang dan gelap, serta animasi halus agar lebih menarik.

Fitur Utama yang Diimplementasikan:
- Tampilan antarmuka modern, rapi, dan responsif
- Fitur Mode Tampilan **Terang / Gelap (Dark Mode)** yang tersimpan di memori lokal
- Navigasi halus antar bagian halaman (smooth scroll)
- Data dimuat secara dinamis langsung dari database
- Filter kategori proyek (Semua, Pengembangan Web, Desain & Sistem)
- Link proyek berfungsi menuju hasil kerja atau kode sumber
- Struktur kode rapi dan terorganisir sesuai standar pengembangan web

---

Teknologi yang Digunakan

Proyek ini dibangun dengan kombinasi teknologi berikut:

- **Frontend**:
  - HTML5
  - Tailwind CSS (untuk desain dan tata letak)
  - Vue.js 3 (untuk interaksi dan memuat data dinamis)
  - Font Awesome (untuk ikon)

- **Backend**:
  - Node.js
  - Express.js (sebagai kerangka kerja server)

- **Database**:
  - SQLite (penyimpanan data ringan tanpa server)

- **Metode Pengambilan Data**:
  - REST API

---

 3. Struktur Database

Sesuai ketentuan minimal yang diminta dalam soal tugas, dibuat 5 tabel utama dengan fungsi masing-masing sebagai berikut:

| Nama Tabel | Fungsi / Keterangan |
| :--- | :--- |
| `profile` | Menyimpan data identitas diri: nama lengkap, bio/deskripsi diri, alamat email, nomor WhatsApp, 
| `skills` | Menyimpan daftar keahlian atau kemampuan, meliputi nama keahlian, kategori keahlian, dan tingkat kemampuan dalam bentuk persentase |
| `experiences` | Menyimpan riwayat pengalaman kerja, organisasi, atau kegiatan, meliputi jabatan/posisi, nama instansi/tempat, durasi waktu, dan deskripsi pengalaman |
| `projects` | Menyimpan data portofolio proyek: nama proyek, kategori, deskripsi, teknologi yang digunakan, tautan hasil kerja, dan tautan kode sumber GitHub |
| `contacts` | Menyimpan informasi kontak lengkap yang dapat dihubungi, ditampilkan di bagian bawah halaman |

> *Catatan:* Data dimasukkan ke dalam database menggunakan metode *seeding* melalui perintah `npm run seed`.

---
 4. Dokumentasi API (Endpoint)

Berikut adalah daftar lengkap alamat API yang telah dibuat, berfungsi, dan digunakan di dalam halaman website, persis sesuai ketentuan tugas:

| Metode | Alamat Endpoint | Fungsi | Status |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/profile` | Mengambil seluruh data identitas diri 
| `GET` | `/api/skills` | Mengambil seluruh daftar data keahlian 
| `GET` | `/api/experiences` | Mengambil seluruh data riwayat pengalaman 
| `GET` | `/api/projects` | Mengambil seluruh data daftar proyek portofolio 
| `GET` | `/api/contacts` | Mengambil seluruh informasi kontak lengkap 


---

Penjelasan Khusus Fitur Proyek

Pada bagian daftar proyek, diterapkan logika tampilan khusus agar sesuai dengan kondisi tugas:

1.  **Proyek: Website Portfolio Pribadi & Aplikasi Task Manager**
    -   Menampilkan tombol **Lihat Hasil** dan **Kode Sumber**
    -   Kedua tombol dapat diklik dan akan langsung mengarah ke repositori GitHub masing-masing proyek

2.  **Proyek: Desain Aplikasi Jual Beli Baju**
    -    Menampilkan tombol **Lihat Hasil** yang mengarah ke tautan Figma
    -   

---

 5. Panduan Cara Menjalankan Aplikasi

Berikut langkah-langkah lengkap untuk menjalankan proyek ini di komputer lokal:

1. Persiapan Awal
Pastikan sudah terinstal **Node.js** dan **npm** di komputer Anda.

2. Install Semua Kebutuhan
Buka terminal atau command prompt, arahkan ke folder utama proyek, lalu jalankan perintah:
```bash
npm install

 3. Memasukkan Data ke Database (Seeder)
Jalankan perintah berikut untuk mengisi data awal ke dalam database SQLite:
```bash
npm run seed

4.Menjalankan server pengembangan 
 -jalankan perintah 'npm run dev' untuk memulai server

 5.buka browser dan taruh alamat berikut:
    http://localhost:3008