var React  = require('react');

var api = require('../../lib/api')

var Intro = require('./intro.jsx')
var Form = require('./form.jsx')

var LoginForm = React.createClass({
  api: null,

  getInitialState: function() {
    return {
      user: null,
    }
  },

  componentWillMount: function() {
    // When component mount (so, it's on client side) load api
    this.api = new api({});
  },

  onLoginSuccess: function(user) {
    this.setState({
      user: user
    });
  },

  render: function() {
    return (
      <div id="login-form">
        <h1>/Osedea</h1>
        <p>Welcome to our coding challenge!</p>
        <hr/>
        <Intro/>
        <Form api={this.api} onLoginSuccess={this.onLoginSuccess} isHidden={this.state.user ? true : false}/>
        {this.state.user ? "Hi " + this.state.user.username : ''}
      </div>
    );
  }
});

module.exports = LoginForm;