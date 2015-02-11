/**
 * Controllers
 */

var adminController = require('./controllers/admin');
var apiController = require('./controllers/api');
var siteController = require('./controllers/site');
var userController = require('./controllers/user');

module.exports = function(app) {

  /*  WEBSITE ROUTES */

  app.get('/', siteController.index);

  app.get('/products', siteController.productListing);

  app.get('/product/:productslug', siteController.productDetail);

  app.get('/faqs', siteController.Faq);

  app.get('/question/:questionslug', siteController.questionAnswer);

  app.get('/business-opportunities', siteController.businessOpportunities);

  app.get('/clients', siteController.clientListing);

  app.get('/gallery', siteController.gallery);

  app.get('/contact', siteController.contact);

};