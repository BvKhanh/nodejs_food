
class AboutController{

  index_about(req, res) {
    res.render('about');
  }

  show_about(req, res) {
    res.send('This is the About page.');
  }
}

module.exports = new AboutController;