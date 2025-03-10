class AuthController {
  login(req, res) {
      res.render('login', {
          layout: 'auth',
          title: 'Đăng nhập',
          action: '/login',
          buttonText: 'Đăng nhập',
          switchText: 'Chưa có tài khoản?',
          switchLink: '/register',
          switchLinkText: 'Đăng ký'
      });
  }

  register(req, res) {
      res.render('register', {
          layout: 'auth',
          title: 'Đăng ký',
          action: '/register',
          buttonText: 'Đăng ký',
          switchText: 'Đã có tài khoản?',
          switchLink: '/login',
          switchLinkText: 'Đăng nhập'
      });
  }
}

module.exports = new AuthController();
    