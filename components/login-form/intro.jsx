var React  = require('react');

var Intro = React.createClass({
  render: function() {

    return (
      <div>
        <h1>/Osedea</h1>
        <p>Welcome to our coding challenge!</p>
        <hr/>
        <h3>Guidelines</h3>
        <p>The following challenge requires you to successfully submit a login form via an API call. Your code should be written on a new Git branch named "feature/solution". Your form should also include form validation with proper error messages. You do not need to implement any server-side logic apart from a route to catch the response and log the submitted data. </p>
        <p>Osedea has developed a library to help with form validation, we encourage you to use it for your implementation:</p>
        <ul>
          <li>
            <a href="https://github.com/Osedea/angular-osd-form">https://github.com/Osedea/angular-osd-form</a>
          </li>
        </ul>
        <p>We've started an angular module for you in <a href="/javascripts/app.js">/javascript/app.js</a>. You can use this for binding the form data.</p>
        <p>Feel free to refactor this project however you feel is necessary.</p>
        <hr/>
        <h3>Submitting</h3>
        <p>To submit your solution, simply zip the project and email it back to us. Please include a brief summary of your approach to the problem in your email. Good luck!</p>
        <hr/>
      </div>
    );
  }
});

module.exports = Intro;