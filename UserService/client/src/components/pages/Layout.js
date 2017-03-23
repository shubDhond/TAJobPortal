import React from "react";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import { Col, Row, Grid} from "react-bootstrap";
import Header from "./TopNav"

@connect((store) => {
    
    return {
        headings: store.headings,
        user: store.user
    };
})

export default class Layout extends React.Component {
    componentWillMount(){
        console.log(this.props.user)
        if (!this.props.user.authenticated){
            browserHistory.push("/")
        }

    }


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
