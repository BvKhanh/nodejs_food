// middleware/upload.js

const multer = require('multer');
const path = require('path');

// Cấu hình lưu trữ file ảnh
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Chỉ định thư mục lưu ảnh
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Đặt tên ảnh duy nhất
    }
});

// Kiểm tra loại file có phải ảnh không
const fileFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    
    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb('Chỉ hỗ trợ file ảnh!');
    }
};

// Sử dụng multer để xử lý file upload
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

module.exports = upload;
