class RegisterController {
  register(req, res) {
      res.render('register', { layout: 'auth' });
  }
}

module.exports = new RegisterController();
