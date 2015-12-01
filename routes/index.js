var homeController = require('../controllers/home');
var authController = require('../controllers/auth');

exports.setup = function(app) {
  app.get('/', homeController.index);
  app.post('/auth/login', authController.login);
};