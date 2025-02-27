const express = require('express');
const router = express.Router();


const menuController = require('../app/controllers/MenuController');

router.get('/menu', menuController.index_menu);
router.get('/', menuController.index_menu);

module.exports = router;
