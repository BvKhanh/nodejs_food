
class NewsController{

  index_news(req, res) {
    res.render('news');
  }

  show_news(req, res) {
    res.send('!!!');
  }
}

module.exports = new NewsController;