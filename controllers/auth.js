'use strict';

var validate = require('../lib/validate');

var login_form_rules = require('../config/form-rules').login;

module.exports = {
  login: function(req, res, next) {
    var body = req.body || null;
    var json = {
      success: true
    };

    var error = validate(body, login_form_rules);

    // Server side validation && Database simulation
    if (error || body.username !== 'arthur' || body.password !== 'Passw0rd') {
      json = {
        success: false,
        error: error || {message: 'Wrong username/password'}
      };
    } else {
      // Return the logged user
      json.user = {
        username: body.username
      };
    }

    // Send data to client
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(json));
  }
};