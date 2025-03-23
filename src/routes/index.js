// const newsRouter = require('./news');
const menuRouter = require('./menu');
const homeRouter = require('./home');
const contactRouter = require('./contact');
const aboutRouter = require('./about');
const authRouter = require('./auth');
const adminRoutes = require('./admin');
const cartRouter = require('./cart');
const userRouter = require('./user');
const registerRouter = require('./register');


function route(app) {


    app.use('/', authRouter);

    app.use('/register', registerRouter);

    app.use('/user', cartRouter);

    app.use('/user', userRouter);

    app.use('/cart', cartRouter);

    app.use('/admin', adminRoutes);

    app.use('/auth', authRouter);

    app.use('/menu', menuRouter);

    app.use('/contact', contactRouter);

    app.use('/about', aboutRouter);

    app.use('/home', homeRouter);


}

module.exports = route;
