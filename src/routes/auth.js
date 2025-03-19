const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/AuthController');

router.get('/login', (req, res) => {
  res.render('auth/login', { layout: 'auth' }); // Sử dụng layout riêng cho auth nếu có
});

router.get('/login', authController.login);
router.get('/register', authController.register);

module.exports = router;
