const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const session = require('express-session');
const multer = require('multer');
const fs = require('fs');
const db = require('./config/db');
const app = express();
const port = 3000;

const route = require('./routes');

db.connect();

// Middleware xử lý dữ liệu form
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cấu hình public folder cho file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// Ghi log request
app.use(morgan('combined'));


// Kiểm tra và tạo thư mục uploads nếu chưa có
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
    console.log('Thư mục "uploads" đã được tạo.');
} else {
    console.log('Thư mục "uploads" đã tồn tại.');
}


// Cấu hình Handlebars
app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'resources', 'views', 'layouts'),
    partialsDir: [
        path.join(__dirname, 'resources', 'views', 'partials'), 
        path.join(__dirname, 'resources', 'views', 'partials', 'home'),
        path.join(__dirname, 'resources', 'views', 'partials', 'about'),
        path.join(__dirname, 'resources', 'views', 'partials', 'contact'),
        path.join(__dirname, 'resources', 'views', 'partials', 'menu'),
        path.join(__dirname, 'resources', 'views', 'partials', 'auth'),
        path.join(__dirname, 'resources', 'views', 'partials', 'account')
    ]
}));



app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Gọi route sau khi đã thiết lập middleware
route(app);


// Khởi động server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

