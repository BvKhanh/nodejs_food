const express = require('express');
const router = express.Router();
const AdminController = require('../app/controllers/AdminController');
const upload = require('../middlewares/upload'); // Middleware để xử lý file ảnh

// Các route khác
router.get('/', AdminController.dashboard); // Dashboard
router.get('/dashboard', AdminController.dashboard);
router.get('/users', AdminController.users);
router.get('/orders', AdminController.orders);
router.get('/products', AdminController.products);
router.get('/popular-food', AdminController.popular_food);

// Chỉnh sửa món ăn phổ biến
router.post('/edit-popular-food', upload.single('image'), AdminController.edit_popular_food);

// Xóa món ăn phổ biến
router.post('/delete-popular-food', AdminController.delete_popular_food);

// Thêm món ăn phổ biến
router.post('/add-popular-food', upload.single('image'), async (req, res) => {

  try {

    const { name, price, popularity, status } = req.body;
    const image = req.file ? req.file.filename : null;

      const newProduct = new PopularFood({
          name,
          price,
          popularity,
          image,
          status
      });

      await newProduct.save();  // Lưu vào DB
      res.json({ success: true, message: 'Thêm món ăn thành công!' });
  } catch (error) {
      console.error(error);
      res.json({ success: false, message: 'Không thể thêm món ăn' });
  }
});


  //Loc san pham 
router.get('/admin/popular-food', async (req, res) => {
  try {
      const products = await Product.find();
      res.render('popular_food', { products });
  } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).send('Server error');
  }
});

// Xóa món ăn phổ biến
router.delete('/delete-popular-food/:id', async (req, res) => {
  try {
      const { id } = req.params;
      await PopularFood.findByIdAndDelete(id);  // Xóa món ăn khỏi DB
      res.json({ success: true });
  } catch (error) {
      console.error('Error deleting product:', error);
      res.json({ success: false });
  }
});



//Lay danh sach san pham
router.get('/popular-food', async (req, res) => {
  try {
      const products = await PopularFood.find();  // Dùng model PopularFood để lấy dữ liệu món ăn phổ biến
      res.json(products);  // Trả về danh sách sản phẩm dưới dạng JSON
  } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ success: false, message: 'Lỗi khi lấy dữ liệu món ăn phổ biến.' });
  }
});

module.exports = router;
