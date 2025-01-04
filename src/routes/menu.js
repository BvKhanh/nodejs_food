const express = require('express');
const router = express.Router();

const menuController = require('../app/controllers/MenuController')

router.get('/flashdeal', menuController.flashdeal);

router.get('/', menuController.index_menu);

module.exports = router;