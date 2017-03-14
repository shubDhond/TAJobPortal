import React from "react";
import {Link} from "react-router";
import {Nav,NavItem, Col, Row, Grid} from "react-bootstrap";
import Header from "./TopNav"


export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome",
        };


    }

    render() {
        const dstyle = {
            background: "brand-danger"
        };
        return (

            <div >
                <Header/>
                <Grid >
                    <Row style={dstyle}>
                        <Col xs={12}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
