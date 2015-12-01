(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/app.jsx":2,"react":"react"}],2:[function(require,module,exports){
var React  = require('react');

var LoginForm = require('./login-form/main.jsx')

var MainApp = React.createClass({displayName: "MainApp",
  api: null,

  componentWillMount: function() {
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(LoginForm, null)
      )
    );
  }
});

module.exports = MainApp;

},{"./login-form/main.jsx":5,"react":"react"}],3:[function(require,module,exports){
var React  = require('react');


var MainApp = React.createClass({displayName: "MainApp",
  api: null,

  componentWillMount: function() {
  },

  render: function() {
    return (
      React.createElement("form", {id: "login-form"}, 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("label", {className: "control-label"}, "Username"), 
          React.createElement("input", {type: "text", name: "username", className: "form-control"})
        ), 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("label", {className: "control-label"}, "Password"), 
          React.createElement("input", {type: "password", name: "password", className: "form-control"})
        ), 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("button", {className: "btn btn-primary"}, 
            "Submit"
          )
        )
      )
    );
  }
});

module.exports = MainApp;

},{"react":"react"}],4:[function(require,module,exports){
var React  = require('react');

var Intro = React.createClass({displayName: "Intro",
  render: function() {

    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "/Osedea"), 
        React.createElement("p", null, "Welcome to our coding challenge!"), 
        React.createElement("hr", null), 
        React.createElement("h3", null, "Guidelines"), 
        React.createElement("p", null, "The following challenge requires you to successfully submit a login form via an API call. Your code should be written on a new Git branch named \"feature/solution\". Your form should also include form validation with proper error messages. You do not need to implement any server-side logic apart from a route to catch the response and log the submitted data. "), 
        React.createElement("p", null, "Osedea has developed a library to help with form validation, we encourage you to use it for your implementation:"), 
        React.createElement("ul", null, 
          React.createElement("li", null, 
            React.createElement("a", {href: "https://github.com/Osedea/angular-osd-form"}, "https://github.com/Osedea/angular-osd-form")
          )
        ), 
        React.createElement("p", null, "We've started an angular module for you in ", React.createElement("a", {href: "/javascripts/app.js"}, "/javascript/app.js"), ". You can use this for binding the form data."), 
        React.createElement("p", null, "Feel free to refactor this project however you feel is necessary."), 
        React.createElement("hr", null), 
        React.createElement("h3", null, "Submitting"), 
        React.createElement("p", null, "To submit your solution, simply zip the project and email it back to us. Please include a brief summary of your approach to the problem in your email. Good luck!"), 
        React.createElement("hr", null)
      )
    );
  }
});

module.exports = Intro;

},{"react":"react"}],5:[function(require,module,exports){
var React  = require('react');

var Intro = require('./intro.jsx')
var Form = require('./form.jsx')

var MainApp = React.createClass({displayName: "MainApp",
  api: null,

  componentWillMount: function() {
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(Intro, null), 
        React.createElement(Form, null)
      )
    );
  }
});

module.exports = MainApp;

},{"./form.jsx":3,"./intro.jsx":4,"react":"react"}]},{},[1]);
