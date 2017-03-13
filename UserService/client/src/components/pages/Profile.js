import React from "react";
import { Form, Grid, Row, Col, FormControl, Button } from "react-bootstrap";

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>

        <Form horizontal>
          <Grid>
            <Row>
              <Col xs={3} xsOffset={1}>
                FIRST NAME
              </Col>
              <Col xsOffset={6}>
                LAST NAME
              </Col>
            </Row>

            <Row>
              <Col xs={5} xsOffset={1}>
                <FormControl type="text" placeholder="First Name" />
              </Col>
              <Col xs={5}>
                <FormControl type="text" placeholder="Last Name" />
              </Col>
            </Row>

            <br />

            <Row>
              <Col xs={3} xsOffset={1}>
                STUDENT NUMBER
              </Col>
            </Row>

            <Row>
              <Col xs={10} xsOffset={1}>
                <FormControl type="text" pattern="[0-9]" placeholder="Student Number" />
              </Col>
            </Row>

            <br />

            <Row>
              <Col xs={3} xsOffset={1}>
                ABOUT YOU
              </Col>
            </Row>

            <Row>
              <Col xs={10} xsOffset={1}>
                <FormControl componentClass="textarea" placeholder="TELL US ABOUT YOU" />
              </Col>
            </Row>

            <br />

            <Row>
              <Col xs={3} xsOffset={1}>
                RESUME
              </Col>
              <Col xsOffset={1}>
                <FormControl type="file" />
              </Col>
            </Row>

            <br />

            <Row>
              <Col xs={10} xsOffset={1}>
                <Button bsStyle="default">Submit</Button>
              </Col>
            </Row>


          </Grid>
        </Form>
      </div>


    );
  }
}
