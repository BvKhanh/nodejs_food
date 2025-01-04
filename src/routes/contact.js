const express = require('express');
const router = express.Router();

const contactController = require('../app/controllers/ContactController');

router.get('/', contactController.index_contact);

module.exports = router;
