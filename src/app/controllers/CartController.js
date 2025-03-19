// class CartController {
//   // Hiển thị giỏ hàng
//   showCart(req, res) {
//       req.session.cart = req.session.cart || []; // Nếu chưa có giỏ hàng, tạo giỏ rỗng
//       const cartTotal = req.session.cart.reduce((sum, item) => sum + item.total, 0);
//       res.render('cart', { cartItems: req.session.cart, cartTotal, layout: 'main' });
//   }

//   // Thêm sản phẩm vào giỏ hàng
//   addToCart(req, res) {
//       const { id, name, price, image } = req.body;
//       req.session.cart = req.session.cart || [];

//       let existingItem = req.session.cart.find(item => item.id == id);
//       if (existingItem) {
//           existingItem.quantity += 1;
//           existingItem.total = existingItem.price * existingItem.quantity;
//       } else {
//           req.session.cart.push({ id, name, price, quantity: 1, total: price, image });
//       }

//       res.json({ success: true, cart: req.session.cart });
//   }

//   // Cập nhật số lượng sản phẩm
//   updateCart(req, res) {
//       const { id, quantity } = req.body;
//       req.session.cart = req.session.cart || [];

//       let item = req.session.cart.find(i => i.id == id);
//       if (item) {
//           item.quantity = parseInt(quantity);
//           item.total = item.price * item.quantity;
//       }

//       res.json({ success: true, cart: req.session.cart });
//   }

//   // Xóa sản phẩm khỏi giỏ hàng
//   removeFromCart(req, res) {
//       const { id } = req.body;
//       req.session.cart = req.session.cart || [];
      
//       req.session.cart = req.session.cart.filter(item => item.id != id);

//       res.json({ success: true, cart: req.session.cart });
//   }
// }

// module.exports = new CartController();
class CartController {
    // Hiển thị giỏ hàng
    showCart(req, res) {
        req.session.cart = req.session.cart || [
            { id: 1, name: "Phở Bò", price: 150000, quantity: 2, total: 300000, image: "/img/phobo.jpg" },
            { id: 2, name: "Cơm Sườn", price: 80000, quantity: 1, total: 80000, image: "/img/comsuon.jpg" },
            { id: 3, name: "Hủ Tiếu", price: 50000, quantity: 3, total: 150000, image: "/img/hutieu.jpg" },
            { id: 4, name: "Phở Nạm", price: 50000, quantity: 3, total: 150000, image: "/img/pho.jpg" },
            { id: 5, name: "Bánh Mì", price: 50000, quantity: 3, total: 150000, image: "/img/banhmi.jpg" },
            { id: 6, name: "Nước Suối", price: 50000, quantity: 3, total: 150000, image: "/img/nuocsuoi.jpg" },
            { id: 7, name: "Coca Cola Lon", price: 50000, quantity: 3, total: 150000, image: "/img/coca_cola_lon.jpg" },
            { id: 8, name: "Ô Long", price: 50000, quantity: 3, total: 150000, image: "/img/olong.jpg" },
            { id: 9, name: "Khoai Tây Chiên", price: 50000, quantity: 3, total: 150000, image: "/img/ff.jpg" }


        ];
        const cartTotal = req.session.cart.reduce((sum, item) => sum + item.total, 0);
        res.render('user/cart', { cartItems: req.session.cart, cartTotal, layout: 'user' });

    }

    addToCart(req, res) {
        const { id, name, price, image } = req.body;
        req.session.cart = req.session.cart || [];

        let existingItem = req.session.cart.find(item => item.id == id);
        if (existingItem) {
            existingItem.quantity += 1;
            existingItem.total = existingItem.price * existingItem.quantity;
        } else {
            req.session.cart.push({ id, name, price, quantity: 1, total: price, image });
        }

        res.json({ success: true, cart: req.session.cart });
    }

    updateCart(req, res) {
        const { id, quantity } = req.body;
        req.session.cart = req.session.cart || [];

        let item = req.session.cart.find(i => i.id == id);
        if (item) {
            item.quantity = parseInt(quantity);
            item.total = item.price * item.quantity;
        }

        res.json({ success: true, cart: req.session.cart });
    }

    removeFromCart(req, res) {
        const { id } = req.body;
        req.session.cart = req.session.cart || [];
        
        req.session.cart = req.session.cart.filter(item => item.id != id);

        res.json({ success: true, cart: req.session.cart });
    }
}

module.exports = new CartController();
