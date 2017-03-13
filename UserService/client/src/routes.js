import React from 'react';
import { Router, Route } from 'react-router';

import SignUp from './components/SignUp';
import Layout from "./components/pages/Layout";
import Jobs from "./components/pages/Jobs";
import Inbox from "./components/pages/Inbox";
import Profile from "./components/pages/Profile";
import Login from './components/Login';
// import Application from "./components/pages/Application";

const Routes = (props) => (
  <Router {...props}>
    <Route path="/sign-up" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/app" component={Layout}>
      <Route path="/app/profile" component={Profile}></Route>
      <Route path="/app/jobs" component={Jobs}></Route>
      <Route path="/app/inbox" component={Inbox}></Route>
    </Route>
  </Router>
);

export default Routes;
