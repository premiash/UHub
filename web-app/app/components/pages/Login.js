import CSSModules from 'react-css-modules';

//Theme imports
import ThemeCSS from './../../theme_modules/theme-css.js'
//import ThemeCoreLib from './../../../theme_modules/theme-core-lib.js'
//import ThemeApp from './../../theme_modules/theme-app.js'
//import ThemePlugins from './../../theme_modules/theme-plugins-lib.js'

// Include React
var React = require("react");

//TODO: Here we include all of the sub-components


// Helper for making AJAX requests to our API
var helpers = require("./../utils/helpers");

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

  handleSubmit(event) {
    event.preventDefault()    
    const emailaddress = event.target.elements[0].value
    const password = event.target.elements[1].value
    // console.log("Email address:" + emailaddress)
    // console.log("Password:" + password)

    helpers.consumerLogin(emailaddress, password, this.context, function(status, context){
        if(status == "success")
        {
            context.router.push("/")
        }
    })
  },

  // Here we render the function
  render: function() {
    return (
      <div className={"login-container"}>
        <div className={'page-container'}>
          <div className={"page-content"}>
            <div className={"content-wrapper"}>
              <div className={"content"}>
                <form onSubmit={this.handleSubmit}>
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
                      <input type="password" className={"form-control"} placeholder="Password" />
                      <div className={"form-control-feedback"}>
                        <i className={"icon-lock2 text-muted"}></i>
                      </div>
                    </div>
                    <div className={"form-group"}>
                      <button type="submit" className={"btn bg-pink-400 btn-block"}>Sign in <i className={"icon-circle-right2 position-right"}></i></button>
                    </div>
                    <div className={"text-center"}>
                      <a href="./password-reset">Forgot password?</a>
                    </div>
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
module.exports = Login;
