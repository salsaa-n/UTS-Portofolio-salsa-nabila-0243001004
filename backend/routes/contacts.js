const express = require('express');
const router = express.Router();
const { getContacts, createMessage } = require('../controllers/contactsController');

router.get('/', getContacts);
router.post('/', createMessage);

module.exports = router;