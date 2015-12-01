var request = require('request');
var URIjs   = require('URIjs');

var api_config = require('../config/api');

module.exports = function(api_opts) {

  var self = this;
  this.opts = api_opts;

  this.createUrl = function(opts) {
    return api_config.HOST + ':' + api_config.PORT + '/' + opts.url
  };

  this.request = function(opts, callback) {
    if (typeof callback != 'function') callback = function(){};

    opts.json = opts.json || true;
    opts.url = self.createUrl(opts);

    request(opts, function(err, response, json) {
      if (err) {
        return callback(err);
      }
      if (response.statusCode != 200) {
        return callback(new Error('API StatusCode : ' + response.statusCode));
      }
      callback(null, json);
    });
  };

  // === Auth ====
  self.authLogin = function(body, callback) {
    self.request({
      url: 'auth/login',
      method: 'POST',
      body: body
    }, callback);
  };

  return this;
}