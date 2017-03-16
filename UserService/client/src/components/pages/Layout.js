import React from "react";
import {Link} from "react-router";
import { Col, Row, Grid} from "react-bootstrap";
import Header from "./TopNav"

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome",
        };

    }
    render() {
        return (
            <div >
                <Header/>
                <Grid style={{marginTop:72}}>
                    <Row>
                        <Col xs={12}>
                            <h1 style={{marginBottom:16,marginTop:64}}>Title</h1>
                            <h4 style={{marginBottom:48}}>Someone please make sure to hook this up corerctly.</h4>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
