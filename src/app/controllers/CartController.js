class CartController {
  // Hiển thị giỏ hàng
  showCart(req, res) {
      req.session.cart = req.session.cart || []; // Nếu chưa có giỏ hàng, tạo giỏ rỗng
      const cartTotal = req.session.cart.reduce((sum, item) => sum + item.total, 0);
      res.render('cart', { cartItems: req.session.cart, cartTotal, layout: 'main' });
  }

  // Thêm sản phẩm vào giỏ hàng
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

  // Cập nhật số lượng sản phẩm
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

  // Xóa sản phẩm khỏi giỏ hàng
  removeFromCart(req, res) {
      const { id } = req.body;
      req.session.cart = req.session.cart || [];
      
      req.session.cart = req.session.cart.filter(item => item.id != id);

      res.json({ success: true, cart: req.session.cart });
  }
}

module.exports = new CartController();
