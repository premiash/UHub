import CSSModules from 'react-css-modules';

//Theme imports
import ThemeCSS from './../../theme_modules/theme-css.js'

// Include React
var React = require("react");

//TODO: Here we include all of the sub-components


// Helper for making AJAX requests to our API
var helpers = require("./../utils/helpers");

// Creating the Main component
var Home = React.createClass({

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
                        <div className={"row"}>
                            <img src="assets/images/home.jpg" className={"img-responsive"} alt="" />
                        </div>
                        <div className={"row"}>
                            <div className={"col-lg-12"}>
                                <div className={"panel panel-flat"}>
                                    <div className={"panel-heading"}>
                                        <h6 className={"panel-title"}>Services</h6>
                                        <div className={"heading-elements"}>
                                            <ul className={"icons-list"}>
                                                <li><a data-action="collapse"></a></li>
                                                <li><a data-action="reload"></a></li>
                                                <li><a data-action="close"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={"panel-body"}>
                                        <div className={"row"}>
                                            <div className={"col-lg-6"}>
                                                <ul className={"media-list content-group"}>
                                                    <li className={"media stack-media-on-mobile"}>
                                                        <div className={"media-left"}>
                                                            <div className={"thumb"}>
                                                                <a href="#">
                                                                    <img src="assets/images/placeholder.jpg" className={"img-responsive img-rounded media-preview"} alt="" />
                                                                    <span className={"zoom-image"}></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={"media-body"}>
                                                            <h6 className={"media-heading"}><a href="#">Painting</a></h6>
                                                            <ul className={"list-inline list-inline-separate text-muted mb-5"}>
                                                                <li><i className={"icon-book-play position-left"}></i> Video tutorials</li>
                                                                <li>Piscataway, NJ</li>
                                                            </ul>
                                                            The him father parish looked has sooner. Attachment frequently gay terminated son...
                                                        </div>
                                                    </li>
                                                    <li className={"media stack-media-on-mobile"}>
                                                        <div className={"media-left"}>
                                                            <div className={"thumb"}>
                                                                <a href="#">
                                                                    <img src="assets/images/placeholder.jpg" className={"img-responsive img-rounded media-preview"} alt="" />
                                                                    <span className={"zoom-image"}></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={"media-body"}>
                                                            <h6 className={"media-heading"}><a href="#">Landscaping</a></h6>
                                                            <ul className={"list-inline list-inline-separate text-muted mb-5"}>
                                                                <li><i className={"icon-book-play position-left"}></i> Video tutorials</li>
                                                                <li>New Brunswick, NJ</li>
                                                            </ul>
                                                            Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed...
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={"col-lg-6"}>
                                                <ul className={"media-list content-group"}>
                                                    <li className={"media stack-media-on-mobile"}>
                                                        <div className={"media-left"}>
                                                            <div className={"thumb"}>
                                                                <a href="#">
                                                                    <img src="assets/images/placeholder.jpg" className={"img-responsive img-rounded media-preview"} alt="" />
                                                                    <span className={"zoom-image"}></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={"media-body"}>
                                                            <h6 className={"media-heading"}><a href="#">Flooring</a></h6>
                                                            <ul className={"list-inline list-inline-separate text-muted mb-5"}>
                                                                <li><i className={"icon-book-play position-left"}></i> Video tutorials</li>
                                                                <li>Fair Lawn, NJ</li>
                                                            </ul>
                                                            On it differed repeated wandered required in. Then girl neat why yet knew rose spot...
                                                        </div>
                                                    </li>
                                                    <li className={"media stack-media-on-mobile"}>
                                                        <div className={"media-left"}>
                                                            <div className={"thumb"}>
                                                                <a href="#">
                                                                    <img src="assets/images/placeholder.jpg" className={"img-responsive img-rounded media-preview"} alt="" />
                                                                    <span className={"zoom-image"}></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={"media-body"}>
                                                            <h6 className={"media-heading"}><a href="#">Roofing</a></h6>
                                                            <ul className={"list-inline list-inline-separate text-muted mb-5"}>
                                                                <li><i className={"icon-book-play position-left"}></i> FAQ section</li>
                                                                <li>Princeton, NJ</li>
                                                            </ul>
                                                            Marianne or husbands if at stronger ye. Considered is as middletons uncommonly...
                                                        </div>
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
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Home;
