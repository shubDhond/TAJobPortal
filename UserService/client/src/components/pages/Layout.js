import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import { Col, Row, Grid} from "react-bootstrap";
import Header from "./TopNav"

@connect((store) => {
    
    return {
        headings: store.headings
    };
})

export default class Layout extends React.Component {
    render() {

        const {headings} = this.props.headings;

        return (
            <div >
                <Header/>
                <Grid style={{marginTop:72}}>
                    <Row>
                        <Col xs={12}>
                            <h1 style={{marginBottom:16,marginTop:64}}>{headings.title}</h1>
                            <h4 style={{marginBottom:48}}>{headings.caption}</h4>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
