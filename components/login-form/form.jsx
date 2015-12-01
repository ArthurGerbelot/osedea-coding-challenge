var React  = require('react');


var MainApp = React.createClass({
  api: null,

  componentWillMount: function() {
  },

  render: function() {
    return (
      <form id="login-form">
        <div className="form-group">
          <label className="control-label">Username</label>
          <input type="text" name="username" className="form-control"/>
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input type="password" name="password" className="form-control"/>
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
});

module.exports = MainApp;