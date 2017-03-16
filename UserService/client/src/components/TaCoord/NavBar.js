import React from "react";
import {Glyphicon, Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export default class TopNav extends React.Component {
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
                        <a href="#"style={brandStyle} >TA COORDINATOR APPLICATION</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />

                </Navbar.Header>
                <Navbar.Collapse>
                    
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">SIGN IN</NavItem>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>


        );
    }
}
