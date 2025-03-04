const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

const route = require('./routes');
require('./config/db/index')
// const db = require('./config/db');

// db.connect();

route(app);

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('.hbs', engine({ 
    extname: '.hbs',
    defaultLayout: 'main', // Đặt layout mặc định
    layoutsDir: path.join(__dirname, 'resources', 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'resources', 'views', 'partials')
}));


app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
// hello