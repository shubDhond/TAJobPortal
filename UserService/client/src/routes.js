import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import StudentSignUp from './components/StudentSignUp';
import Layout from "./components/pages/Layout";
import Jobs from "./components/pages/jobs/Jobs";
import Inbox from "./components/pages/Inbox";
import Profile from "./components/pages/Profile";
import JobsSingleView from "./components/pages/jobs/JobSingleView";
import Listings from "./components/pages/jobs/Listings";
import CoordLayout from "./components/TaCoord/CoordLayout";

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={StudentSignUp} />
    <Route path="/app" component={Layout}>
      <Route path="/app/profile" component={Profile} pageTitle="Open Jobs"/>
      <Route path="/app/jobs" component={Jobs} pageTitle="Open Jobs">
        <IndexRoute component={Listings}/>
        <Route path="/app/jobs/single" component={JobsSingleView}/>
      </Route>
      <Route path="/app/inbox" component={Inbox} pageTitle="Inbox"/>
    </Route>
    <Route path="/coord" component={CoordLayout}>

    </Route>
  </Router>
);

export default Routes;
