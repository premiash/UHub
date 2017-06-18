// Include the Main React Dependencies
// var React = require("react");
// var ReactDOM = require("react-dom");

// Include the main Main Component
// var Main = require("./components/Main");
// var Login = require("./components/pages/login/Login");

// This code here allows us to render our main component (in this case Main)
//ReactDOM.render(<Main />, document.getElementById("app"));
//ReactDOM.render(<Login />, document.getElementById("app"));

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

//import { configureStore } from './store'
// import routes and pass them into <Router/>
import routes from './routes'

//const store = configureStore()

render(
    <Router routes={routes} history={browserHistory} />,
     document.getElementById('app')
)