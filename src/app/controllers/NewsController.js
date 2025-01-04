const Food = require('../models/Food');
const { imageToBase64 } = require('./imageUtils');
const path = require('path');

class NewsController {
    index_news(req, res, next) {
        // Sử dụng path.join để tạo đường dẫn tuyệt đối chính xác
        const imagePath = path.join(__dirname, '../../public/img/comsuon.jpg');
        const imageBase64 = imageToBase64(imagePath); // Chuyển ảnh thành base64

        Food.find({})
            .then((foods) => res.render('news', { foods, imageBase64 })) // Truyền Base64 vào template
            .catch(next);
    }

    show_news(req, res) {
        res.send('!!!');
    }
}

module.exports = new NewsController();
