import React from "react";
import { connect } from "react-redux";

import { Button,Grid,Row,Col } from "react-bootstrap";
import { browserHistory } from "react-router";

@connect((store) => {
  console.log(store);
  return {
    course : store.application.course
  };
})

export default class JobsSingleView extends React.Component {
  render() {
    const { course } = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}><Button onClick={browserHistory.goBack}>Back</Button></Col>
        </Row>
        <Row>
          <Col xs={12} md={8}><h2>{course.title}</h2></Col>
          <Col xs={12} md={4}><h2>Apply by: {course.deadline}</h2></Col>
        </Row>

        <Row>
          <Col xs={12} md={12}>{course.description}</Col>
        </Row>

        <Row>
          <Col xs={12}><Button bsStyle="success" bsSize="large" block>Apply Now</Button></Col>
        </Row>
      </Grid>
    );
  }
}
