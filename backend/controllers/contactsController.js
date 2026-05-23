const Contact = require('../models/Contact');

// Ambil data kontak untuk ditampilkan
exports.getContacts = async (req, res) => {
  try {
    const contact = await Contact.findOne({ where: { id: 1 } });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Fungsi untuk terima pesan baru
exports.createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const pesanBaru = await Contact.create({ name, email, message });
    res.status(201).json({
      message: "✅ Pesan berhasil dikirim!",
      data: pesanBaru
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};