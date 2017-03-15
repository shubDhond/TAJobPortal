import React from "react";
import {Navbar} from "react-bootstrap";

import { Button,Grid,Row,Col } from "react-bootstrap";
import { browserHistory } from "react-router";

export default class Application extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}><Button onClick={browserHistory.goBack}>Back</Button></Col>
        </Row>
        <Row>
          <Col xs={12} md={8}><h2>Course Name</h2></Col>
          <Col xs={12} md={4}><h2>Apply by:</h2></Col>
        </Row>

        <Row>
          <Col xs={12} md={12}>Description of the course</Col>
        </Row>

        <Row>
          <Col xs={12}><Button bsStyle="success" bsSize="large" block>Apply Now</Button></Col>
        </Row>
      </Grid>
    );
  }
}
