import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'

import Home from './components/pages/Home'
import Login from './components/pages/Login'
import PasswordReset from './components/pages/PasswordReset'

module.exports = (
    <Route path="/" component={App} >
        <IndexRoute component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/password-reset" component={PasswordReset}/>
    </Route>
)