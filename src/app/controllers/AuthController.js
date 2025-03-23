class AuthController {
    login(req, res) {
        res.render('auth', { layout: 'auth', page: 'login' }); 
    }
}

module.exports = new AuthController();
