import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import StudentSignUp from './components/StudentSignUp';
import Layout from "./components/pages/Layout";
import Jobs from "./components/pages/Jobs";
import Inbox from "./components/pages/Inbox";
import Profile from "./components/pages/Profile";
import Application from "./components/pages/Application";
import Listings from "./components/pages/Listings";

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={StudentSignUp} />
    <Route path="/app" component={Layout}>
      <Route path="/app/profile" component={Profile} pageTitle="Open Jobs"/>
      <Route path="/app/jobs" component={Jobs} pageTitle="Open Jobs">
        <IndexRoute component={Listings}/>
        <Route path="/app/jobs/application" component={Application}/>
      </Route>
      <Route path="/app/inbox" component={Inbox} pageTitle="Inbox"/>
    </Route>
  </Router>
);

export default Routes;
