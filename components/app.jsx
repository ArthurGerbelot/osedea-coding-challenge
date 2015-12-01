var React  = require('react');

var LoginForm = require('./login-form/main.jsx')

var MainApp = React.createClass({
  api: null,

  componentWillMount: function() {
  },

  render: function() {
    return (
      <div>
        <LoginForm/>
      </div>
    );
  }
});

module.exports = MainApp;