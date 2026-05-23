const express = require('express');
const router = express.Router();
// ✅ Sudah dipanggil kedua fungsinya
const { getContacts, createMessage } = require('../controllers/contactsController');

router.get('/', getContacts);
router.post('/', createMessage);

module.exports = router;