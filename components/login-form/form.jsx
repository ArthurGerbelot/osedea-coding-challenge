var React  = require('react');

var validate = require('../../lib/validate');
var login_form_rules = require('../../config/form-rules').login;

var Form = React.createClass({

  propTypes: {
    api: React.PropTypes.object.isRequired,
    isHidden: React.PropTypes.object.isRequired,
    onLoginSuccess: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      username: null,
      password: null,
      is_loading: false,
      error: null,
      error_is_visible: false
    };
  },
  _handleChange: function() {
    this.setState({
      username: this.refs['username'].getDOMNode().value,
      password: this.refs['password'].getDOMNode().value,
      error_is_visible: false
    });
  },
  _handleSubmit: function(e) {
    var self = this;
    e.preventDefault();

    var body = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({
      error_is_visible: false
    });

    // Client side validation
    var error = validate(body, login_form_rules);
    if (error) {
      this.setState({
        error: error,
        error_is_visible: true
      });
      return;
    }

    this.setState({
      is_loading: true
    });
    // Call API
    this.props.api.authLogin(body, function(err, result) {
      // Simulate 1sec for API request
      setTimeout(function() {
        var state_update = {
          is_loading: false
        };
        if (err || result && result.success !== true) {
          state_update.error = result.error || { message: err || 'Something wrong append', key: null};
          state_update.error_is_visible = true;
          self.setState(state_update);
          return;
        }

        state_update.error_is_visible = false;
        self.setState(state_update);

        self.props.onLoginSuccess(result.user);

      }, 1000);
    });
  },

  render: function() {
    var form_container_classes = ['login-form__form-container'];
    if (this.props.isHidden) {
      form_container_classes.push('login-form__form-container--is-hidden');
    }

    return (
      <div className={form_container_classes.join(' ')}>
        {this._renderErrorMessage()}
        <form className="login-form__form" onSubmit={this._handleSubmit}>
          {this._renderInput('username')}
          {this._renderInput('password')}
          <div className="form-group">
            {this._renderSubmit()}
          </div>
        </form>
      </div>
    );
  },

  _renderErrorMessage: function() {
    var error = this.state.error;
    var error_classes = ["login-form__error-message"];
    var error_icon = <i className="fa fa-exclamation"/>;

    if (error && this.state.error_is_visible) {
      error_classes.push('login-form__error-message--is-visible');
    }

    return (
      <div className={error_classes.join(' ')}>
       {error ? [error_icon, error.message] : ''}
      </div>
    );
  },

  _renderInput: function(key) {
    var error = this.state.error;
    var input_classes = ["form-group"];
    if (error && this.state.error_is_visible && error.key === key) {
      input_classes.push('form-group--is-error');
    }
    return (
      <div className={input_classes.join(' ')} key={'input-' + key}>
        <label className="control-label">
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </label>
        <input
          type={key === 'password' ? 'password' : 'text'}
          name={key}
          ref={key}
          className="form-control"
          value={this.state[key]}
          onChange={this._handleChange} />
      </div>
    );
  },

  _renderSubmit: function() {
    return this.state.is_loading
    ? <i className="fa fa-spinner fa-spin"/>
    : <button className="btn btn-primary">Submit</button>;
  }
});

module.exports = Form;