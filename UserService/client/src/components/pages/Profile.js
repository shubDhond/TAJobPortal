import React from "react";
import {Header,Button, Col, Form, FormControl, Row} from "react-bootstrap";

export default class Profile extends React.Component {
    render() {
        return (
            <div>


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
            </div>


        );
    }
}
