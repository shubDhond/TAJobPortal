import React from "react";
import { Link } from "react-router";

import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Link to="/app/profile">Profile</Link>
        <Link to="/app/jobs">Jobs</Link>
        <Link to="/app/inbox">Inbox</Link>
        {this.props.children}
      </div>
    );
  }
}
