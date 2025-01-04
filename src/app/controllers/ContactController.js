class ContactController {
    index_contact(req, res) {
        res.render('contact');
    }
}

module.exports = new ContactController();
