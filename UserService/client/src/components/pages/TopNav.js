import React from "react";
import {Glyphicon, Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {browserHistory} from "react-router";

export default class TopNav extends React.Component {
    
    routeToView = (path) => {
        return (dispatch) => {
            browserHistory.push(path);
        }
    };
    render() {
        const navStyle = {
            paddingTop: "16px",
            paddingBottom: "16px",
            fontWeight:"700",
            textTransform: "up"
        }
        const brandStyle = {
            fontWeight:"800",
            fontSize:24,
            color:"#333"
        }
        return (
            <Navbar fixedTop style={navStyle}>
                <Navbar.Header>
                    <Navbar.Brand >
                        <a href="#"style={brandStyle} >TA APPLICATION</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />

                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav bsStyle="pills">
                        <LinkContainer to="/app/profile">
                            <NavItem >
                                <Glyphicon glyph="glyphicon glyphicon-user"/> PROFILE</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/app/jobs">
                            <NavItem>   <Glyphicon glyph="glyphicon glyphicon-education"/> JOBS</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/app/inbox">
                            <NavItem> <Glyphicon glyph="glyphicon glyphicon-envelope"/> INBOX</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} onClick={this.routeToView('/')} href="#">Logout</NavItem>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>


        )
            ;
    }
}
