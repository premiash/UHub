import CSSModules from 'react-css-modules';
import styles from './../../assets/css/table.css';

import { Link } from 'react-router'

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
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">Hello!!</h2>
            <p className="text-center">
              <em>This is a starter page!!</em>
            </p>
          </div>
          <Link {...this.props} activeClassName="active" to="/login">Login</Link>
        </div>
        <div styleName='table'>
            <div styleName='row'>
                <div styleName='cell'>A0 {this.state.count}</div>
                <div styleName='cell'>B0</div>
            </div>
        </div>
        {this.props.children}
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = App;
