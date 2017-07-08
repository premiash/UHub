import CSSModules from 'react-css-modules';

//Theme imports
import ThemeCSS from './../theme_modules/theme-css.js'

// Include React
var React = require("react");
//TODO: Here we include all of the sub-components


// Helper for making AJAX requests to our API
var helpers = require("./../utils/helpers");

// Creating the Main component
var Profile = React.createClass({

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

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    //const name = encodeURIComponent(this.state.user.name);
    const email = encodeURIComponent(event.target.elements[0].value);
    const password = encodeURIComponent(event.target.elements[1].value);
    const formData = `email=${email}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/api/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // set a message
        localStorage.setItem('successMessage', xhr.response.message);

        // make a redirect
        this.context.router.replace('/login');
      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  },

  // Here we render the function
  render: function() {
    return (
      <div className={"login-container"}>
        <div className={"page-container"}>
            <div className={"page-content"}>
                <div className={"content-wrapper"}>
                    <div className={"content"}>
                        <div className={"row"}>
                            <div className={"col-lg-9"}>
                                <div className={"timeline timeline-left content-group"}>
                                    <div className={"timeline-container"}>
                                        <div className={"timeline-row"}>
                                            <div className={"timeline-icon"}>
                                                <a href="#"><img src={"assets/images/placeholder.jpg"} alt="" /></a>
                                            </div>
                                            <div className={"panel panel-flat"}>
                                                <div className={"panel-heading"}>
                                                    <h6 className={"panel-title"}>Profile information</h6>
                                                </div>
                                                <div className={"panel-body"}>
                                                    <form action="#">
                                                        <div className={"form-group"}>
                                                            <div className={"row"}>
                                                                <div className={"col-md-6"}>
                                                                    <label>Full Name</label>
                                                                    <input type="text" value="Ashmy Selvamony" className={"form-control"} />
                                                                </div>
                                                                <div className={"col-md-6"}>
                                                                    <label>Email</label>
                                                                    <input type="text" value="premiash@gmail.com" className={"form-control"} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={"form-group"}>
                                                            <div className={"row"}>
                                                                <div className={"col-md-6"}>
                                                                    <label>Login Name</label>
                                                                    <input type="text"  readonly="readonly" value="premiash@gmail.com" className={"form-control"} />
                                                                </div>
                                                                <div className={"col-md-6"}>
                                                                    <label>Password</label>
                                                                    <input type="password" value="abc123" className={"form-control"} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={"form-group"}>
                                                            <div className={"row"}>
                                                                <div className={"col-md-6"}>
                                                                    <label>Address line 1</label>
                                                                    <input type="text" value="159 Pleasantview drive" className={"form-control"} />
                                                                </div>
                                                                <div className={"col-md-6"}>
                                                                    <label>Address line 2</label>
                                                                    <input type="text" value="FL 1" className={"form-control"} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={"form-group"}>
                                                            <div className={"row"}>
                                                                <div className={"col-md-4"}>
                                                                    <label>City</label>
                                                                    <input type="text" value="Piscataway" className={"form-control"} />
                                                                </div>
                                                                <div className={"col-md-4"}>
                                                                    <label>State/Province</label>
                                                                    <input type="text" value="New Jersey" className={"form-control"} />
                                                                </div>
                                                                <div className={"col-md-4"}>
                                                                    <label>ZIP code</label>
                                                                    <input type="text" value="08854" className={"form-control"} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={"form-group"}>
                                                            <div className={"row"}>
                                                                <div className={"col-md-6"}>
                                                                    <label>Your country</label>
                                                                    <select className={"select"}>
                                                                        <option value="germany" selected="selected">United States</option> 
                                                                        <option value="france">France</option> 
                                                                        <option value="spain">Spain</option> 
                                                                        <option value="netherlands">Netherlands</option> 
                                                                        <option value="uk">United Kingdom</option> 
                                                                    </select>
                                                                </div>
                                                                <div className={"col-md-6"}>
                                                                    <label>Phone #</label>
                                                                    <input type="text" value="+1-201-552-1430" className={"form-control"} />
                                                                    <span className={"help-block"}>+1-999-999-9999</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={"text-right"}>
                                                            <button type="submit" className={"btn btn-primary"}>Save <i className={"icon-arrow-right14 position-right"}></i></button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"timeline-row"}>
                                            <div className={"timeline-icon"}>
                                                <div className={"bg-warning-400"}>
                                                    <i className={"icon-cash3"}></i>
                                                </div>
                                            </div>
                                            <div className={"row"}>
                                                <div className={"col-lg-6"}>
                                                    <div className={"panel border-left-lg border-left-danger invoice-grid timeline-content"}>
                                                        <div className={"panel-body"}>
                                                            <div className={"row"}>
                                                                <div className={"col-sm-6"}>
                                                                    <h6 className={"text-semibold no-margin-top"}>Leonardo Fellini</h6>
                                                                    <ul className={"list list-unstyled"}>
                                                                        <li>Invoice #: &nbsp;0028</li>
                                                                        <li>Issued on: <span className={"text-semibold"}>2015/01/25</span></li>
                                                                    </ul>
                                                                </div>
                                                                <div className={"col-sm-6"}>
                                                                    <h6 className={"text-semibold text-right no-margin-top"}>$8,750</h6>
                                                                    <ul className={"list list-unstyled text-right"}>
                                                                        <li>Method: <span className={"text-semibold"}>SWIFT</span></li>
                                                                        <li className={"dropdown"}>
                                                                            Status: &nbsp;
                                                                            <a href="#" className={"label bg-danger-400 dropdown-toggle"} data-toggle="dropdown">Overdue <span className={"caret"}></span></a>
                                                                            <ul className={"dropdown-menu dropdown-menu-right"}>
                                                                                <li className={"active"}><a href="#"><i className={"icon-alert"}></i> Overdue</a></li>
                                                                                <li><a href="#"><i className={"icon-alarm"}></i> Pending</a></li>
                                                                                <li><a href="#"><i className={"icon-checkmark3"}></i> Paid</a></li>
                                                                                <li className={"divider"}></li>
                                                                                <li><a href="#"><i className={"icon-spinner2 spinner"}></i> On hold</a></li>
                                                                                <li><a href="#"><i className={"icon-cross2"}></i> Canceled</a></li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={"panel-footer panel-footer-condensed"}>
                                                            <div className={"heading-elements"}>
                                                                <span className={"heading-text"}>
                                                                    <span className={"status-mark border-danger position-left"}></span> Due: <span className={"text-semibold"}>2015/02/25</span>
                                                                </span>
                                                                <ul className={"list-inline list-inline-condensed heading-text pull-right"}>
                                                                    <li><a href="#" className={"text-default"} data-toggle="modal" data-target="#invoice"><i className={"icon-eye8"}></i></a></li>
                                                                    <li className={"dropdown"}>
                                                                        <a href="#" className={"text-default dropdown-toggle"} data-toggle="dropdown"><i className={"icon-menu7"}></i> <span className={"caret"}></span></a>
                                                                        <ul className={"dropdown-menu dropdown-menu-right"}>
                                                                            <li><a href="#"><i className={"icon-printer"}></i> Print invoice</a></li>
                                                                            <li><a href="#"><i className={"icon-file-download"}></i> Download invoice</a></li>
                                                                            <li className={"divider"}></li>
                                                                            <li><a href="#"><i className={"icon-file-plus"}></i> Edit invoice</a></li>
                                                                            <li><a href="#"><i className={"icon-cross2"}></i> Remove invoice</a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={"col-lg-6"}>
                                                    <div className={"panel border-left-lg border-left-success invoice-grid timeline-content"}>
                                                        <div className={"panel-body"}>
                                                            <div className={"row"}>
                                                                <div className={"col-sm-6"}>
                                                                    <h6 className={"text-semibold no-margin-top"}>Rebecca Manes</h6>
                                                                    <ul className={"list list-unstyled"}>
                                                                        <li>Invoice #: &nbsp;0027</li>
                                                                        <li>Issued on: <span className={"text-semibold"}>2015/02/24</span></li>
                                                                    </ul>
                                                                </div>
                                                                <div className={"col-sm-6"}>
                                                                    <h6 className={"text-semibold text-right no-margin-top"}>$5,100</h6>
                                                                    <ul className={"list list-unstyled text-right"}>
                                                                        <li>Method: <span className={"text-semibold"}>Paypal</span></li>
                                                                        <li className={"dropdown"}>
                                                                            Status: &nbsp;
                                                                            <a href="#" className={"label bg-success-400 dropdown-toggle"} data-toggle="dropdown">Paid <span className={"caret"}></span></a>
                                                                            <ul className={"dropdown-menu dropdown-menu-right"}>
                                                                                <li><a href="#"><i className={"icon-alert"}></i> Overdue</a></li>
                                                                                <li><a href="#"><i className={"icon-alarm"}></i> Pending</a></li>
                                                                                <li className={"active"}><a href="#"><i className={"icon-checkmark3"}></i> Paid</a></li>
                                                                                <li className={"divider"}></li>
                                                                                <li><a href="#"><i className={"icon-spinner2 spinner"}></i> On hold</a></li>
                                                                                <li><a href="#"><i className={"icon-cross2"}></i> Canceled</a></li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={"panel-footer panel-footer-condensed"}>
                                                            <div className={"heading-elements"}>
                                                                <span className={"heading-text"}>
                                                                    <span className={"status-mark border-success position-left"}></span> Due: <span className={"text-semibold"}>2015/03/24</span>
                                                                </span>
                                                                <ul className={"list-inline list-inline-condensed heading-text pull-right"}>
                                                                    <li><a href="#" className={"text-default"} data-toggle="modal" data-target="#invoice"><i className={"icon-eye8"}></i></a></li>
                                                                    <li className={"dropdown"}>
                                                                        <a href="#" className={"text-default dropdown-toggle"} data-toggle="dropdown"><i className={"icon-menu7"}></i> <span className={"caret"}></span></a>
                                                                        <ul className={"dropdown-menu dropdown-menu-right"}>
                                                                            <li><a href="#"><i className={"icon-printer"}></i> Print invoice</a></li>
                                                                            <li><a href="#"><i className={"icon-file-download"}></i> Download invoice</a></li>
                                                                            <li className={"divider"}></li>
                                                                            <li><a href="#"><i className={"icon-file-plus"}></i> Edit invoice</a></li>
                                                                            <li><a href="#"><i className={"icon-cross2"}></i> Remove invoice</a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-lg-3"}>
                                <div className={"thumbnail"}>
                                    <div className={"thumb thumb-rounded thumb-slide"}>
                                        <img src={"assets/images/placeholder.jpg"} alt="" />
                                        <div className={"caption"}>
                                            <span>
                                                <a href="#" className={"btn bg-success-400 btn-icon btn-xs"} data-popup="lightbox"><i className={"icon-plus2"}></i></a>
                                                <a href="user_pages_profile.html" className={"btn bg-success-400 btn-icon btn-xs"}><i className={"icon-link"}></i></a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className={"caption text-center"}>
                                        <h6 className={"text-semibold no-margin"}>Ashmy Selvamony</h6>
                                    </div>
                                </div>
                            </div>
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
module.exports = Profile;
