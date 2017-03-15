import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import {Link} from "react-router";
import {Form, FormControl, Jumbotron, Col, Row, Grid, Button} from "react-bootstrap";

@connect((store) => {
  return {
    user: store.user
  }
})
class App extends Component {
  render() {
      const jumboStyle ={
          height:"100%",
          background:"none"
      };

    return (
      <Grid fluid style={{height:"100%", padding:0}}>
          <Row>

              <Col xs={12} sm="6">
                  <Jumbotron style={jumboStyle}>
                      <h1 style={{marginBottom:16,marginTop:64}}>Apply to be a TA</h1>
                      <h2 style={{marginBottom:48}}>Lorem Ipsum Lorem Ipsum</h2>

                  </Jumbotron>
              </Col>
              <Col xs={12} sm="6">
              <Form horizontal className="card">
                  <Row>
                      <Col xs={4} >
                          <h6> FIRST NAME</h6>
                      </Col>
                      <Col xs={4}>
                          <h6>LAST NAME</h6>
                      </Col>
                      <Col xs={4} >
                          <h6>STUDENT NUMBER</h6>
                      </Col>
                  </Row>

                  <Row>
                      <Col xs={4} >
                          <FormControl type="text" placeholder="First Name"/>
                      </Col>
                      <Col xs={4}>
                          <FormControl type="text" placeholder="Last Name"/>
                      </Col>
                      <Col xs={4} >
                          <FormControl type="text" pattern="[0-9]" placeholder="Student Number"/>
                      </Col>
                  </Row>

                  <br />

                  {/*<Row>*/}
                  {/*<Col xs={12} >*/}
                  {/*<FormControl type="text" pattern="[0-9]" placeholder="Something else"/>*/}
                  {/*</Col>*/}
                  {/*</Row>*/}

                  <Row>
                      <Col xs={12} >
                          <FormControl type="text" pattern="[0-9]" placeholder="blahblah"/>
                      </Col>
                  </Row>

                  <br />

                  <Row>
                      <Col xs={3} >
                          <h6>ABOUT YOU</h6>
                      </Col>
                  </Row>
                  <Row>
                      <Col xs={12} >
                          <FormControl style={{height:128}} componentClass="textarea" placeholder="About you"/>
                      </Col>
                  </Row>

                  <br />

                  <Row>
                      <Col xs={3} >
                          <h6>RESUME</h6>
                      </Col>
                      <Col >
                          <FormControl type="file"/>
                      </Col>
                  </Row>

                  <br />
                  <Row>
                      <Col xs={12} >
                          <Button className="right-align" bsStyle="primary" bsSize="large">Submit</Button>
                      </Col>
                  </Row>

              </Form>
              </Col>
          </Row>

          {this.props.children}
      </Grid>
    );
  }
}

export default App;
