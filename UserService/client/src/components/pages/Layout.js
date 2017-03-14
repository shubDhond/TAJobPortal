import React from "react";
import {Nav,NavItem, Col, Row, Grid} from "react-bootstrap";
import Header from "./Header"

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
                <Header/>
                <Nav bsStyle="tabs">
                    <NavItem to="/app/profile">Profile</NavItem>

                    <NavItem to="/app/jobs">Jobs</NavItem>
                    <NavItem to="/app/inbox">Inbox</NavItem>
                </Nav>
                <Grid>
                    <Row>
                        <Col sm="{2}">
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
