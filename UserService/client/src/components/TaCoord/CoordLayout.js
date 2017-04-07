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

    componentWillMount(){
        if (!this.props.user.user.id){
            browserHistory.push("/")
        }
    }

    render() {
        return (

            <div className="fullheight">
                <Header/>
                <Grid fluid  className="fullheight">
                    <Row  className="show-grid fullheight"  >

                      <Col style={{padding:0}} md={6} className="fullheight">
                        <Applicant  className="fullheight"/>
                      </Col>
                      <Col  style={{padding:0}} md={6}  className="fullheight">
                        <CourseList className="fullheight"/>
                      </Col>

                    </Row>
                </Grid>
            </div>
        );
    }
}
