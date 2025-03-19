const express = require('express');
const router = express.Router();
const CartController = require('../app/controllers/CartController');

// Hiển thị giỏ hàng
router.get('/cart', CartController.showCart);

// Thêm sản phẩm vào giỏ hàng
router.post('/add', CartController.addToCart);

// Cập nhật số lượng sản phẩm
router.post('/update', CartController.updateCart);

// Xóa sản phẩm khỏi giỏ hàng
router.post('/remove', CartController.removeFromCart);

module.exports = router;
