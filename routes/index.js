var homeController = require('../controllers/home');

exports.setup = function(app) {
  app.get('/', homeController.index);
};