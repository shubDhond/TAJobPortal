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
        console.log(this.props.children);
        return (
            <div >
                <Header/>
                <Grid style={{marginTop:64}}>
                    <Row>
                        <Col xs={12}>
                            <h1 style={{marginBottom:16,marginTop:64}}>{this.props.children.type.name}</h1>
                            <h4 style={{marginBottom:48}}>Someone please make sure to hook this up corerctly.</h4>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
