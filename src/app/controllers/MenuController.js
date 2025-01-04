class MenuController {
    index_menu(req, res) {
        res.render('menu');
    }

    flashdeal(req, res) {
        res.send('FLASHDEAL');
    }
}

module.exports = new MenuController();
