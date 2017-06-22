import CSSModules from 'react-css-modules';

//Theme imports
import ThemeCSS from './../../theme_modules/theme-css.js'

// Include React
var React = require("react");
//TODO: Here we include all of the sub-components


// Helper for making AJAX requests to our API
var helpers = require("./../utils/helpers");

// Creating the Main component
var ConsumerRegistration = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

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

  handleSubmit(event) {
    event.preventDefault()    
    const emailaddress = event.target.elements[0].value
    const password = event.target.elements[1].value
    console.log("Email address:" + emailaddress)
    console.log("Password:" + password)

    helpers.registerUser(emailaddress, password, this.context, function(status, context){
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
        <div className={"page-container"}>
            <div className={"page-content"}>
                <div className={"content-wrapper"}>
                    <div className={"content"}>
                        <form onSubmit={this.handleSubmit}>
                            <div className={"panel panel-body login-form"}>
                                <div className={"text-center"}>
                                    <div className={"icon-object border-success text-success"}>
                                        <i className={"icon-plus3"}></i></div>
                                    <h5 className={"content-group"}>Create account 
                                        <small className={"display-block"}>All fields are required</small></h5>
                                </div>
                                <div className={"content-divider text-muted form-group"}>
                                    <span>Your credentials</span></div>
                                <div className={"form-group has-feedback has-feedback-left"}>
                                    <input type="text" className={"form-control"} placeholder="Email address" />
                                    <div className={"form-control-feedback"}>
                                        <i className={"icon-user-check text-muted"}></i>
                                    </div>
                                    {/*<span className={"help-block text-danger"}>
                                        <i className={"icon-cancel-circle2 position-left"}></i> 
                                        This username is already taken
                                    </span>*/}
                                </div>
                                <div className={"form-group has-feedback has-feedback-left"}>
                                    <input type="password" className={"form-control"} placeholder="Create password" />
                                    <div className={"form-control-feedback"}>
                                        <i className={"icon-user-lock text-muted"}></i>
                                    </div>
                                </div>
                                <button type="submit" className={"btn bg-pink-400 btn-block btn-lg"} >
                                    Register <i className={"icon-circle-right2 position-right"}></i></button>
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
module.exports = ConsumerRegistration;
