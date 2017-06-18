import CSSModules from 'react-css-modules';
import styles from './../../../../assets/css/table.css';

//Theme imports
import ThemeCSS from './../../../theme_modules/theme-css.js'
//import ThemeCoreLib from './../../../theme_modules/theme-core-lib.js'
//import ThemeApp from './../../../theme_modules/theme-app.js'
//import ThemePlugins from './../../../theme_modules/theme-plugins-lib.js'

// Include React
var React = require("react");

//TODO: Here we include all of the sub-components


// Helper for making AJAX requests to our API
var helpers = require("./../../utils/helpers");

// Creating the Main component
var Login = React.createClass({

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
        <div className={'navbar navbar-inverse bg-indigo'}>
          <div className={"navbar-header"}>
            <a className={"navbar-brand"} href="_uhub_index.html">UHub</a>

            <ul className={"nav navbar-nav pull-right visible-xs-block"}>
              <li><a data-toggle="collapse" data-target="#navbar-mobile"><i className={"icon-tree5"}></i></a></li>
            </ul>
          </div>
        </div>
        <div className={'page-container'}>
          <div className={"page-content"}>
            <div className={"content-wrapper"}>
              <div className={"content"}>
                <form action="./_uhub_user_profile.html">
                  <div className={"panel panel-body login-form"}>
                    <div className={"text-center"}>
                      <div className={"icon-object border-slate-300 text-slate-300"}>
                          <i className={"icon-reading"}></i>
                      </div>
                      <h5 className={"content-group"}>Login to your account <small className={"display-block"}>Enter your credentials below</small></h5>
                    </div>
                    <div className={"form-group has-feedback has-feedback-left"}>
                      <input type="text" className={"form-control"} placeholder="Username"/>
                      <div className={"form-control-feedback"}>
                        <i className={"icon-user text-muted"}></i>
                      </div>
                    </div>
                    <div className={"form-group has-feedback has-feedback-left"}>
                      <input type="text" className={"form-control"} placeholder="Password" />
                      <div className={"form-control-feedback"}>
                        <i className={"icon-lock2 text-muted"}></i>
                      </div>
                    </div>
                    <div className={"form-group"}>
                      <button type="submit" className={"btn bg-pink-400 btn-block"}>Sign in <i className={"icon-circle-right2 position-right"}></i></button>
                    </div>
                    <div className={"text-center"}>
                      <a href="_uhub_password_reset.html">Forgot password?</a>
                    </div>
                  </div>
                </form>
                <div className={"footer text-muted text-center"}>
                  &copy; 2017. <a href="#">UHub</a> by <a href="#">Ashmy Selvamony</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Login;
