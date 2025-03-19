const express = require('express');
const router = express.Router();
const AdminController = require('../app/controllers/AdminController');

router.get('/', (req, res) => {
  res.render('admin/dashboard', { layout: 'admin' });
});

// Định tuyến đến các trang Admin
router.get('/dashboard', AdminController.dashboard);
router.get('/users', AdminController.users);
router.get('/orders', AdminController.orders);
router.get('/products', AdminController.products);

module.exports = router;