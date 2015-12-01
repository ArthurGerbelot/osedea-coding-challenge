var React  = require('react');

var Intro = require('./intro.jsx')
var Form = require('./form.jsx')

var MainApp = React.createClass({
  api: null,

  componentWillMount: function() {
  },

  render: function() {
    return (
      <div>
        <Intro/>
        <Form/>
      </div>
    );
  }
});

module.exports = MainApp;