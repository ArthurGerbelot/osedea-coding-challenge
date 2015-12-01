var React = require('react');

var MainApp = require('../../components/app.jsx');

global.ReactController = new function() {
  var self = this;

  // This will be updated on /views/layout.jade
  this.react_data = {};

  this.init = function() {
    // Re Render to bind events
    self.reRender();
  };

  // ReRender React container
  this.reRender = function() {
    var App = React.createElement(MainApp, self.react_data);
    React.render(
      App,
      document.getElementById('react-app')
    );
  }
};