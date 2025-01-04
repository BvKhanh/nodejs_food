const express = require('express');
const router = express.Router();

const aboutController = require('../app/controllers/AboutController');

router.get('/show', aboutController.show_about);

router.get('/', aboutController.index_about);

module.exports = router;
