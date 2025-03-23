// routes/admin.js

const express = require('express');
const router = express.Router();
const AdminController = require('../app/controllers/AdminController');
const upload = require('../middlewares/upload');  // Import middleware upload

// Các route khác
router.get('/', AdminController.dashboard); // Dashboard
router.get('/dashboard', AdminController.dashboard);
router.get('/users', AdminController.users);
router.get('/orders', AdminController.orders);
router.get('/products', AdminController.products);
router.get('/popular-food', AdminController.popular_food);

// Route thêm món ăn phổ biến (sử dụng middleware upload để xử lý ảnh)
router.post('/add-popular-food', upload.single('image'), AdminController.add_popular_food); // Lưu ảnh món ăn

// Các route khác như chỉnh sửa, xóa món ăn phổ biến
router.post('/edit-popular-food', upload.single('image'), AdminController.edit_popular_food);
router.post('/delete-popular-food', AdminController.delete_popular_food);

module.exports = router;
