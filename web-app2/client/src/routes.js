import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'

import Home from './pages/Home'
import ConsumerRegistration from './pages/ConsumerRegistration'
import Login from './pages/Login'
import PasswordReset from './pages/PasswordReset'
import Profile from './pages/Profile'

var routes = module.exports = (
    <Route path="/" component={App} >
        <IndexRoute component={Home}/>
        <Route path="/register" component={ConsumerRegistration}/>
        <Route path="/login" component={Login}/>
        <Route path="/password-reset" component={PasswordReset}/>
        <Route path="/profile" component={Profile}/>
    </Route>
)

// const routes = {
//   // base component (wrapper for the whole application).
//   component: App,
//   childRoutes: [

//     {
//       path: '/',
//       getComponent: (location, callback) => {
//         if (Auth.isUserAuthenticated()) {
//           callback(null, DashboardPage);
//         } else {
//           callback(null, HomePage);
//         }
//       }
//     },

//     {
//       path: '/login',
//       component: LoginPage
//     },

//     {
//       path: '/signup',
//       component: SignUpPage
//     },

//     {
//       path: '/logout',
//       onEnter: (nextState, replace) => {
//         Auth.deauthenticateUser();

//         // change the current URL to /
//         replace('/');
//       }
//     }

//   ]
// };

// export default routes;