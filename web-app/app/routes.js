import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'

import Home from './components/pages/Home'
import ConsumerRegistration from './components/pages/ConsumerRegistration'
import Login from './components/pages/Login'
import PasswordReset from './components/pages/PasswordReset'

var router = module.exports = (
    <Route path="/" component={App} >
        <IndexRoute component={Home}/>
        <Route path="/register" component={ConsumerRegistration}/>
        <Route path="/login" component={Login}/>
        <Route path="/password-reset" component={PasswordReset}/>
    </Route>
)