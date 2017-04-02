import React from "react";
import {connect} from "react-redux";
import {Header,Button, Col, Form, FormControl, Row} from "react-bootstrap";
import {setHeading} from "../../actions/headingsActions"

@connect((store) => {

    return {};
})


export default class Profile extends React.Component {

    componentWillMount = () => {
        var payload = {
                title: "Profile",
                caption: "Everything about you."
            }

        this.props.dispatch(setHeading(payload))
    }

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
                            <FormControl type="number" pattern="[0-9]" placeholder="Student Number"/>
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
                            <FormControl type="text" placeholder="courses"/>
                            <FormControl type="text" placeholder="date of application"/>
                            <FormControl type="text" placeholder="eamil"/>
                            <FormControl type="text" placeholder="phone number"/>
                            <FormControl type="text" placeholder="program"/>
                            <FormControl type="text" placeholder="student department"/>
                            <FormControl type="text" placeholder="student department explain"/>
                            <FormControl type="text" placeholder="ta courses"/>
                            <FormControl type="text" placeholder="work status"/>
                            <FormControl type="text" placeholder="work status explain"/>
                            <FormControl type="number" pattern="[0-9]" placeholder="year"/>
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
