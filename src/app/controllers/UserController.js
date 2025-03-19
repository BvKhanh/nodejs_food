class UserController {
    // [GET] /user/profile
    profile(req, res) {
        res.render('user/profile', { layout: 'user', title: 'Thông Tin Cá Nhân', user: req.session.user });
    }

    // [GET] /user/orders
    orders(req, res) {
        res.render('user/orders', { layout: 'user', title: 'Đơn Hàng Của Tôi' });
    }

    // [GET] /user/cart
    cart(req, res) {
        req.session.cart = req.session.cart || [];
        const cartTotal = req.session.cart.reduce((sum, item) => sum + item.total, 0);
        res.render('user/cart', { layout: 'user', title: 'Giỏ Hàng', cartItems: req.session.cart, cartTotal });
    }

    // [GET] /admin/users - Danh sách người dùng
    userList(req, res) {
        const users = [
            { _id: 1, name: 'Nguyễn Văn A', email: 'user1@example.com', role: 'customer' },
            { _id: 2, name: 'Trần Thị B', email: 'user2@example.com', role: 'customer' },
            { _id: 3, name: 'Phạm Văn C', email: 'admin@example.com', role: 'admin' },
            { _id: 4, name: 'Lê Thị D', email: 'user3@example.com', role: 'customer' },
            { _id: 5, name: 'Hoàng Văn E', email: 'user4@example.com', role: 'customer' }
        ];

        res.render('admin/users', { layout: 'user', title: 'Quản lý Người dùng', users });
    }
}

module.exports = new UserController();
