import React from 'react';
import  App  from './App.js';
import Hero from "./Components/Hero";
import SignIn from "./SignIn";
import { Route, Switch, Redirect } from 'react-router-dom';
import { PostRequestHooks } from './PostRequestHooks.js';

export const Routes = () => {
  return (
    <div>
      <Hero />
      <Switch>
        <Route exact path="/Home" component={App} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/Categories" component={PostRequestHooks} />
      </Switch>
    </div>
  );
};