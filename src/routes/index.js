const newsRouter = require('./news');
const menuRouter = require('./menu');
const homeRouter = require('./home');
const contactRouter = require('./contact');
const aboutRouter = require('./about');
const authRouter = require('./auth');
const accountRouter = require('./account');
const adminRoutes = require('./admin');
const cartRouter = require('./cart');

function route(app) {

    app.use('/cart', cartRouter);

    app.use('/admin', adminRoutes);

    app.use('/accounts',accountRouter);

    app.use('/auth', authRouter);

    app.use('/menu', menuRouter);

    app.use('/contact', contactRouter);

    app.use('/about', aboutRouter);

    app.use('/home', homeRouter);


}

module.exports = route;
