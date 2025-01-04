const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController')

router.get('/show_news', newsController.show_news);

router.get('/', newsController.index_news);

module.exports = router;