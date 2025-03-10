class AdminController {
  // [GET] /admin/dashboard
  dashboard(req, res) {
      res.render('admin/dashboard', { layout: 'admin' });
  }

  // [GET] /admin/users
  users(req, res) {
      res.render('admin/users', { layout: 'admin' });
  }

  // [GET] /admin/orders
  orders(req, res) {
      res.render('admin/orders', { layout: 'admin' });
  }

  // [GET] /admin/products
  products(req, res) {
      res.render('admin/products', { layout: 'admin' });
  }
}

// Xuất controller để sử dụng trong route
module.exports = new AdminController();
