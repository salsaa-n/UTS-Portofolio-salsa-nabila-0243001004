const sequelize = require('./config');
const Profile = require('../models/Profile');
const Skill = require('../models/Skill');
const Experience = require('../models/Experience');
const Project = require('../models/Project');

async function seed() {
  await sequelize.sync({ force: true });
  console.log('Tabel berhasil dibuat ulang.');

  await Profile.create({
    name: 'Salsa Nabila',
    headline: '#',
    bio: 'Saya adalah mahasiswa Sistem dan Teknologi Informasi yang passionate di bidang web development. Saya senang membangun aplikasi yang memberikan solusi nyata bagi pengguna, mulai dari frontend yang menarik hingga backend yang solid. Selalu antusias untuk belajar teknologi baru dan berkolaborasi dalam tim.',
    photo_url: 'https://ui-avatars.com/api/?name=Salsa+Nabila&size=300&background=6366f1&color=fff',
    email: 'Salsanbilla08@gmail.com',
    phone: '+62 858-8009-8446',
    location: 'Indonesia',
    cv_url: '/cv.pdf',
    github_url: 'https://github.com/salsaa-n',
    linkedin_url: 'https://linkedin.com/in/salsanabila',
    instagram_url: 'https://instagram.com/salsanblla15'
  });

  await Skill.bulkCreate([
    { name: 'HTML & CSS', category: 'Bahasa Pemrograman', icon: 'HTML', level: 90 },
    { name: 'JavaScript', category: 'Bahasa Pemrograman', icon: 'JS', level: 85 },
    { name: 'Vue.js', category: 'Framework', icon: 'VUE', level: 80 },
    { name: 'Express.js', category: 'Framework', icon: 'EX', level: 78 },
    { name: 'SQLite', category: 'Basis Data', icon: 'SQL', level: 75 },
    { name: 'Git & GitHub', category: 'Alat Bantu', icon: 'GIT', level: 80 },
    { name: 'Figma', category: 'Desain', icon: 'FIG', level: 82 },
    { name: 'Kerja Sama Tim', category: 'Soft Skill', icon: 'TEAM', level: 90 }
  ]);

  await Experience.bulkCreate([
    {
      company: 'ITB Dewantara',
      position: 'Mahasiswa Sistem dan Teknologi Informasi',
      start_date: 'September 2024',
      end_date: 'Sekarang',
      is_current: true,
      description: 'Mempelajari pemrograman, basis data, desain antarmuka, dan pengembangan aplikasi untuk menyelesaikan permasalahan teknologi.'
    },
    {
      company: 'Tugas Kelompok Pemrograman Web',
      position: 'Anggota Tim',
      start_date: 'April 2026',
      end_date: 'April 2026',
      is_current: false,
      description: 'Membuat aplikasi Task Manager. Bertugas mengembangkan tampilan, fitur tambah/ubah/hapus tugas, dan integrasi dengan basis data.'
    },
    {
      company: 'Mata Kuliah Desain Antarmuka Pengguna',
      position: 'Anggota Tim Proyek',
      start_date: '07 Desember 2025',
      end_date: '20 Desember 2025',
      is_current: false,
      description: 'Merancang desain aplikasi jual beli pakaian dari konsep, sketsa hingga prototipe interaktif menggunakan Figma.'
    }
  ]);

  await Project.bulkCreate([
    {
      name: 'Aplikasi Task Manager',
      description: 'Aplikasi untuk mengelola daftar tugas harian dengan fitur lengkap.',
      image_url: 'https://placehold.co/600x400/6366f1/ffffff?text=Task+Manager+App',
      tech_stack: 'HTML, CSS, JS, Vue.js, Express.js, SQLite',
      category: 'Pengembangan Web',
      demo_url: 'https://github.com/salsaa-n',
      github_url: 'https://github.com/salsaa-n'
    },
    {
      name: 'Desain Aplikasi Jual Beli Baju',
      description: 'Proyek kelompok mata kuliah. Merancang antarmuka aplikasi yang mudah dinavigasi, menarik, dan memberikan pengalaman berbelanja yang nyaman bagi pengguna.',
      image_url: 'https://placehold.co/600x400/f59e0b/ffffff?text=UIUX+Clothing+App',
      tech_stack: 'Figma, UI/UX Design, Wireframe, Prototipe',
      category: 'Desain & Sistem',
      demo_url: 'https://www.figma.com/proto/n6NPxoFOM8gHZrF4687e1A/Untitled?node-id=0-1',
      github_url: ''
    },
    {
      name: 'Website Portfolio Pribadi',
      description: 'Website portofolio pribadi dengan data dinamis dari backend Express dan database SQLite. Dibuat sebagai tugas UTS.',
      image_url: 'https://placehold.co/600x400/10b981/ffffff?text=Portfolio+Website',
      tech_stack: 'Vue.js, Express.js, SQLite, Tailwind CSS',
      category: 'Pengembangan Web',
      demo_url: '#',
      github_url: 'https://github.com/salsaa-n'
    }
  ]);

  console.log('Seed data berhasil dimasukkan!');
  process.exit(0);
}

seed().catch(err => {
  console.error('Seed gagal:', err);
  process.exit(1);
});