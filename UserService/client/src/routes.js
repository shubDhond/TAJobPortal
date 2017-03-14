import React from 'react';
import { Router, Route } from 'react-router';

import StudentSignUp from './components/StudentSignUp';
import Layout from "./components/pages/Layout";
import Jobs from "./components/pages/Jobs";
import Inbox from "./components/pages/Inbox";
import Profile from "./components/pages/Profile";
// import Application from "./components/pages/Application";

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={StudentSignUp} />
    <Route path="/app" component={Layout}>

                <Route path="/app/profile" component={Profile}/>
                <Route path="/app/jobs" component={Jobs}/>
                <Route path="/app/inbox" component={Inbox}/>

    </Route>
  </Router>
);

export default Routes;
