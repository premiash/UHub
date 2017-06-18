import CSSModules from 'react-css-modules';
import { Link } from 'react-router'
import ThemeCSS from './../theme_modules/theme-css.js' //Theme imports

// Include React
var React = require("react");

// Include React
var React = require("react");

//TODO: Here we include all of the sub-components


// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var App = React.createClass({

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
      <div className={'login-container'}>
        <div className={"navbar navbar-inverse bg-indigo"}>
          <div className={"navbar-header"}>
            <a className={"navbar-brand"} href="/">UHub</a>
            <ul className={"nav navbar-nav visible-xs-block"}>
              <li><a data-toggle="collapse" data-target="#navbar-mobile"><i className={"icon-tree5"}></i></a></li>
              <li><a className={"sidebar-mobile-main-toggle"}><i className={"icon-paragraph-justify3"}></i></a></li>
            </ul>
          </div>

          <div className={"navbar-collapse collapse"} id="navbar-mobile">
            <div className={"navbar-right"}>
              <p className={"navbar-text"}>Advertise</p>
              <p className={"navbar-text"}><a href="./register"><span className={"label bg-success-400"}>Sign Up</span></a></p>
              <p className={"navbar-text"}><a href="./login">Sign In</a></p>
            </div>
          </div>
        </div>
              {this.props.children}
        <div className={"footer text-muted text-center"}>
                  &copy; 2017. <a href="#">UHub</a> by <a href="#">Ashmy Selvamony</a>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = App;
