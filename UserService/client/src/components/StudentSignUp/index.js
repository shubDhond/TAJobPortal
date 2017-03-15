import React, {Component} from "react";
import {connect} from "react-redux";
import "./style.css";
import {Button, Col, Form, FormControl, Grid, Jumbotron, Row} from "react-bootstrap";

@connect((store) => {
    return {
        user: store.user
    }
})
class App extends Component {
    render() {
        const jumboStyle = {
            height: "100%",
            background: "none"
        };

        return (
            <Grid fluid style={{height: "100%"}}>
                <Row style={{padding:64}}>
                    <Col xs={12} sm="9">
                        <Jumbotron style={jumboStyle}>
                            <h1 style={{marginBottom: 16, marginTop: 64}}>Apply to be a TA</h1>
                            <h2 style={{marginBottom: 48}}>Lorem Ipsum Lorem Ipsum</h2>

                        </Jumbotron>
                    </Col>
                    <Col xs={12} sm="3">
                        <Form horizontal className="card" >
                            <Row>
                                <Col xs={12} style={{marginBottom:24}}>
                                    <h2 style={{teaxtAlign:"center", margin:0}}> Sign In</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <h6> EMAIL</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <FormControl type="text" placeholder="Password"/>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col xs={12}>
                                    <h6> PASSWORD</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <FormControl type="password" placeholder="Password"/>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col xs={12}>
                                    <Button block  bsStyle="primary"
                                            bsSize="large" href="/app/profile">Sign In</Button>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col xs={12}>
                                    <a className="see-more centered"><h5>Create an Account</h5></a>
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
