import React from 'react';
import { Router, Route } from 'react-router';

import StudentSignUp from './components/StudentSignUp';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={StudentSignUp} />
  </Router>
);

export default Routes;