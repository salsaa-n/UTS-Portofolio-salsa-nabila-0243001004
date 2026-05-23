const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Mengimpor model yang tadi kamu kirim

// Rute untuk menangani pengiriman form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Simpan ke database
    const newContact = await Contact.create({ name, email, message });
    
    // Ini adalah "log" yang diminta di poin 13
    console.log('Pesan baru diterima:', newContact.toJSON());
    
    res.status(201).json({ message: 'Pesan berhasil dikirim!' });
  } catch (error) {
    console.error('Error saat menyimpan pesan:', error);
    res.status(500).json({ error: 'Gagal mengirim pesan' });
  }
});

module.exports = router;