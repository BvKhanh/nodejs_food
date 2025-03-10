const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const session = require('express-session');

const app = express();
const port = 3000;

const route = require('./routes');

// Sử dụng session trước khi định nghĩa route
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 } // Giỏ hàng lưu trong 1 giờ
}));

// Middleware xử lý dữ liệu form
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Hỗ trợ JSON trong request body

// Cấu hình public folder cho file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// Ghi log request
app.use(morgan('combined'));

// Cấu hình Handlebars
app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'resources', 'views', 'layouts'),
    partialsDir: [
        path.join(__dirname, 'resources', 'views', 'partials'), 
        path.join(__dirname, 'resources', 'views', 'partials', 'partials_home'),
        path.join(__dirname, 'resources', 'views', 'partials', 'partials_about'),
        path.join(__dirname, 'resources', 'views', 'partials', 'partials_contact'),
        path.join(__dirname, 'resources', 'views', 'partials', 'partials_menu'),
        path.join(__dirname, 'resources', 'views', 'partials', 'partials_auth'),
        path.join(__dirname, 'resources', 'views', 'partials', 'partials_account')
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
