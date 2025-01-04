const newsRouter = require('./news');
const menuRouter = require('./menu');
const contactRouter = require('./contact');
const aboutRouter = require('./about');
// const homeRouter = require('./home');

function route(app){

  app.use('/news', newsRouter);

  app.use('/menu', menuRouter);

  app.use('/contact', contactRouter);

  app.use('/about', aboutRouter);

  // app.use('/home', homeRouter);

}

module.exports = route;