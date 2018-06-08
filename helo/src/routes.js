//import react and switch and route
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import components to be routed
import Auth from './Components/Auth';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Post from './Components/Post';

// import House from './components/House';


//this is setting up our routes, need EXACT on the 'home'
export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/post/:postid' component={Post} />
        <Route path='/new' component={Form} />
    </Switch>
)