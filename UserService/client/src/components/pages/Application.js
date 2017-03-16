import React from "react";
import {Navbar} from "react-bootstrap";

export default class Application extends React.Component {
  render() {
    return (
      <Navbar fixedTop="True">
        <Navbar.Link>Application</Navbar.Link>
      </Navbar>
    );
  }
}
