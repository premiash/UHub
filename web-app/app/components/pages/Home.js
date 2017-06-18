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
                            <div className={"col-lg-12"}>
                                <div className={"panel panel-flat"}>
                                    <div className={"panel-heading"}>
                                        <h6 className={"panel-title"}>Traffic sources</h6>
                                        <div className={"heading-elements"}>
                                            <form className={"heading-form"} action="#">
                                                <div className={"form-group"}>
                                                    <label className={"checkbox-inline checkbox-switchery checkbox-right switchery-xs"}>
                                                        <input type="checkbox" className={"switch"} checked="checked" />
                                                        Live update:
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className={"container-fluid"}>
                                        <div className={"row"}>
                                            <div className={"col-lg-4"}>
                                                <ul className={"list-inline text-center"}>
                                                    <li>
                                                        <a href="#" className={"btn border-teal text-teal btn-flat btn-rounded btn-icon btn-xs valign-text-bottom"}>
                                                            <i className={"icon-plus3"}></i></a>
                                                    </li>
                                                    <li className={"text-left"}>
                                                        <div className={"text-semibold"}>New visitors</div>
                                                        <div className={"text-muted"}>2,349 avg</div>
                                                    </li>
                                                </ul>
                                                <div className={"col-lg-10 col-lg-offset-1"}>
                                                    <div className={"content-group"} id="new-visitors"></div>
                                                </div>
                                            </div>
                                            <div className={"col-lg-4"}>
                                                <ul className={"list-inline text-center"}>
                                                    <li>
                                                        <a href="#" className={"btn border-warning-400 text-warning-400 btn-flat btn-rounded btn-icon btn-xs valign-text-bottom"}>
                                                            <i className={"icon-watch2"}></i></a>
                                                    </li>
                                                    <li className={"text-left"}>
                                                        <div className={"text-semibold"}>New sessions</div>
                                                        <div className={"text-muted"}>08:20 avg</div>
                                                    </li>
                                                </ul>
                                                <div className={"col-lg-10 col-lg-offset-1"}>
                                                    <div className={"content-group"} id="new-sessions"></div>
                                                </div>
                                            </div>
                                            <div className={"col-lg-4"}>
                                                <ul className={"list-inline text-center"}>
                                                    <li>
                                                        <a href="#" className={"btn border-indigo-400 text-indigo-400 btn-flat btn-rounded btn-icon btn-xs valign-text-bottom"}>
                                                            <i className={"icon-people"}></i></a>
                                                    </li>
                                                    <li className={"text-left"}>
                                                        <div className={"text-semibold"}>Total online</div>
                                                        <div className={"text-muted"}><span className={"status-mark border-success position-left"}></span> 5,378 avg</div>
                                                    </li>
                                                </ul>
                                                <div className={"col-lg-10 col-lg-offset-1"}>
                                                    <div className={"content-group"} id="total-online"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"position-relative"} id="traffic-sources"></div>
                                </div>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col-lg-12"}>
                                <div className={"panel panel-flat"}>
                                    <div className={"panel-heading"}>
                                        <h6 className={"panel-title"}>Latest posts</h6>
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
                                                                    <span className={"zoom-image"}><i className={"icon-play3"}></i></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={"media-body"}>
                                                            <h6 className={"media-heading"}><a href="#">Up unpacked friendly</a></h6>
                                                            <ul className={"list-inline list-inline-separate text-muted mb-5"}>
                                                                <li><i className={"icon-book-play position-left"}></i> Video tutorials</li>
                                                                <li>14 minutes ago</li>
                                                            </ul>
                                                            The him father parish looked has sooner. Attachment frequently gay terminated son...
                                                        </div>
                                                    </li>
                                                    <li className={"media stack-media-on-mobile"}>
                                                        <div className={"media-left"}>
                                                            <div className={"thumb"}>
                                                                <a href="#">
                                                                    <img src="assets/images/placeholder.jpg" className={"img-responsive img-rounded media-preview"} alt="" />
                                                                    <span className={"zoom-image"}><i className={"icon-play3"}></i></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={"media-body"}>
                                                            <h6 className={"media-heading"}><a href="#">It allowance prevailed</a></h6>
                                                            <ul className={"list-inline list-inline-separate text-muted mb-5"}>
                                                                <li><i className={"icon-book-play position-left"}></i> Video tutorials</li>
                                                                <li>12 days ago</li>
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
                                                                    <span className={"zoom-image"}><i className={"icon-play3"}></i></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={"media-body"}>
                                                            <h6 className={"media-heading"}><a href="#">Case read they must</a></h6>
                                                            <ul className={"list-inline list-inline-separate text-muted mb-5"}>
                                                                <li><i className={"icon-book-play position-left"}></i> Video tutorials</li>
                                                                <li>20 hours ago</li>
                                                            </ul>
                                                            On it differed repeated wandered required in. Then girl neat why yet knew rose spot...
                                                        </div>
                                                    </li>
                                                    <li className={"media stack-media-on-mobile"}>
                                                        <div className={"media-left"}>
                                                            <div className={"thumb"}>
                                                                <a href="#">
                                                                    <img src="assets/images/placeholder.jpg" className={"img-responsive img-rounded media-preview"} alt="" />
                                                                    <span className={"zoom-image"}><i className={"icon-play3"}></i></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={"media-body"}>
                                                            <h6 className={"media-heading"}><a href="#">Too carriage attended</a></h6>
                                                            <ul className={"list-inline list-inline-separate text-muted mb-5"}>
                                                                <li><i className={"icon-book-play position-left"}></i> FAQ section</li>
                                                                <li>2 days ago</li>
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
