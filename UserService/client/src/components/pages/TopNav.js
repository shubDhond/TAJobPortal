import React from "react";
import {Nav, NavItem, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export default class TopNav extends React.Component {
    render() {
        return (
            <Navbar >
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">TA Application</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav bsStyle="tabs">
                        <LinkContainer to="/app/profile">
                            <NavItem >Profile</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/app/jobs">
                            <NavItem>Jobs</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/app/inbox">
                            <NavItem>Inbox</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                        <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>


        );
    }
}
