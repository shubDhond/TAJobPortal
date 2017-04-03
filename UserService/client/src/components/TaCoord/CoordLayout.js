import React from "react";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import { Col, Row, Grid} from "react-bootstrap";
import Header from "./NavBar"

import Applicant from './Applicant';
import CourseList from './courses';

@connect((store) => {
    return {
        user: store.user
    };
})
export default class Layout extends React.Component {

    // componentWillMount(){
    //     if (!this.props.user.authenticated){
    //         browserHistory.push("/")
    //     }
    //     console.log(this.props.user)
    // }

    render() {

        return (
            <div >
                <Header/>
                <Grid fluid style={{marginTop:82}}>
                    <Row className="show-grid">

                      <Col style={{padding:0}} md={6}>

                        <Applicant />
                      </Col>
                      <Col style={{padding:0}} md={6}>
                        <CourseList />
                      </Col>

                    </Row>
                </Grid>
            </div>
        );
    }
}
