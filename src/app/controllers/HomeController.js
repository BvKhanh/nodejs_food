class HomeController {

  index_home(req, res) {
  
      res.render('home');
  }

}

module.exports = new HomeController();
