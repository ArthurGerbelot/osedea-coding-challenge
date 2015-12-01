'use strict';

var React = require('react');
require('node-jsx').install({extension: '.jsx', harmony: true});

var MainApp = require('../components/app.jsx');

module.exports = {
  index: function(req, res, next) {
console.log("Home?");
    var react_data = {};
    var App = React.createElement(MainApp, react_data);
    res.react_app = React.renderToString(App);

    res.render('index', {
      react_app: res.react_app,
      react_data: res.react_data
    });
  }
};