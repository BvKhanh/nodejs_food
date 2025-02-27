const newsRouter = require('./news');
const menuRouter = require('./menu');
const homeRouter = require('./home');
const contactRouter = require('./contact');
const aboutRouter = require('./about');

function route(app) {


    app.use('/news', newsRouter);

    app.use('/menu', menuRouter);

    app.use('/contact', contactRouter);

    app.use('/about', aboutRouter);

    app.use('/home', homeRouter);

}

module.exports = route;
