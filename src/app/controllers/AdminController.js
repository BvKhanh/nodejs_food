const User = require('../models/User');
const Order = require('../models/Order');
const Product = require('../models/Product');
const PopularFood = require('../models/PopularFood');
const path = require('path');
const fs = require('fs'); // Để xử lý việc xóa file ảnh

class AdminController {
    // [GET] /admin/dashboard
    dashboard(req, res) {
        res.render('admin/dashboard', { layout: 'admin' });
    }

    // [GET] /admin/users
    async users(req, res) {
        try {
            const users = await User.find(); 
            res.render('admin/users', { layout: 'admin', users });
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).send('Lỗi server khi lấy danh sách người dùng');
        }
    }

    // [GET] /admin/orders
    async orders(req, res) {
        try {
            const orders = await Order.find(); 
            res.render('admin/orders', { layout: 'admin', orders });
        } catch (error) {
            console.error('Error fetching orders:', error);
            res.status(500).send('Lỗi server khi lấy danh sách đơn hàng');
        }
    }

    // [GET] /admin/products
    async products(req, res) {
        try {
            const products = await Product.find(); 
            res.render('admin/products', { layout: 'admin', products });
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).send('Lỗi server khi lấy danh sách sản phẩm');
        }
    }

    // [GET] /admin/popular-food
    async popular_food(req, res) {
        try {
            const popular_food = await PopularFood.find();
            if (popular_food.length === 0) {
                return res.render('admin/popular_food', { 
                    layout: 'admin', 
                    message: 'Chưa có món ăn phổ biến nào!' 
                });
            }
            res.render('admin/popular_food', { layout: 'admin', popular_food });
        } catch (error) {
            console.error('Error fetching popular food:', error);
            res.status(500).send('Lỗi server khi lấy món ăn phổ biến');
        }
    }

    // [POST] /admin/add-popular-food - Thêm món ăn phổ biến
    async add_popular_food(req, res) {
        const { name, price, popularity, status } = req.body;
        const image = req.file ? req.file.filename : '';

        if (!name || !price || !popularity || !status) {
            return res.json({ success: false, message: 'Thông tin món ăn không hợp lệ!' });
        }

        try {
            const newProduct = new PopularFood({
                name,
                price,
                popularity,
                image,
                status
            });
            await newProduct.save();
            res.json({ success: true, message: 'Thêm món ăn thành công!' });
        } catch (error) {
            console.error('Error adding popular food:', error);
            res.json({ success: false, message: 'Không thể thêm món ăn phổ biến' });
        }
    }

    // [POST] /admin/edit-popular-food - Chỉnh sửa món ăn phổ biến
    async edit_popular_food(req, res) {
        const { id, name, price, popularity, status } = req.body;
        const image = req.file ? req.file.filename : req.body.image;

        if (!name || !price || !popularity || !status) {
            return res.json({ success: false, message: 'Thông tin món ăn không hợp lệ!' });
        }

        try {
            const updatedProduct = await PopularFood.findByIdAndUpdate(id, {
                name,
                price,
                popularity,
                image,
                status
            }, { new: true });

            res.json({ success: true, updatedProduct });
        } catch (error) {
            console.error('Error editing popular food:', error);
            res.json({ success: false, message: 'Không thể chỉnh sửa món ăn' });
        }
    }

    // [POST] /admin/delete-popular-food - Xóa món ăn phổ biến
    async delete_popular_food(req, res) {
        const { id } = req.body;

        try {
            const product = await PopularFood.findById(id);
            if (!product) {
                return res.json({ success: false, message: 'Món ăn không tồn tại' });
            }

            if (product.image) {
                const imagePath = path.join(__dirname, '../uploads', product.image);
                if (fs.existsSync(imagePath)) {
                    fs.unlink(imagePath, (err) => {
                        if (err) console.error('Error deleting image:', err);
                    });
                }
            }

            await PopularFood.findByIdAndDelete(id);
            res.json({ success: true, message: 'Xóa món ăn thành công' });
        } catch (error) {
            console.error('Error deleting popular food:', error);
            res.json({ success: false, message: 'Không thể xóa món ăn' });
        }
    }
}

module.exports = new AdminController();
