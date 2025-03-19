const express = require('express');
const router = express.Router();
const UserController = require('../app/controllers/UserController');

router.get('/profile', UserController.profile);
router.get('/orders', UserController.orders);
router.get('/cart', UserController.cart);

module.exports = router;
