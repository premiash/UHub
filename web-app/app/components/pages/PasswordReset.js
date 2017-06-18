import CSSModules from 'react-css-modules';

//Theme imports
import ThemeCSS from './../../theme_modules/theme-css.js'

// Include React
var React = require("react");

//TODO: Here we include all of the sub-components


// Helper for making AJAX requests to our API
var helpers = require("./../utils/helpers");

// Creating the Main component
var PasswordReset = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
  getInitialState: function() {
    return { searchTerm: "", results: "", history: [] };
  },

  // The moment the page renders get the History
  componentDidMount: function() {
    //TODO
  },

  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {

  //TODO
  },
  //TODO This function allows childrens to update the parent.
  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },
  // Here we render the function
  render: function() {
    return (
      <div className={"login-container"}>
        <div className={"page-container"}>
          <div className={"page-content"}>
            <div className={"content-wrapper"}>
              <div className={"content"}>
                <form action="index.html">
                  <div className={"panel panel-body login-form"}>
                    <div className={"text-center"}>
                      <div className={"icon-object border-warning text-warning"}><i className={"icon-spinner11"}></i></div>
                      <h5 className={"content-group"}>Password recovery 
                        <small className={"display-block"}>We'll send you instructions in email</small></h5>
                    </div>
                    <div className={"form-group has-feedback"}>
                      <input type="email" className={"form-control"} placeholder="Your email" />
                      <div className={"form-control-feedback"}>
                        <i className={"icon-mail5 text-muted"}></i>
                      </div>
                    </div>
                    <button type="submit" className={"btn bg-pink-400 btn-block"}>Reset password 
                      <i className={"icon-arrow-right14 position-right"}></i></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = PasswordReset;
