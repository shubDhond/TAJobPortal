import React from "react";
import { Col, Row, Grid} from "react-bootstrap";
import Header from "./NavBar"

import ApplicantList from './ApplicantListview';
import CourseList from './courses';

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
                <Grid fluid style={{marginTop:82}}>
                    <Row className="show-grid">

                      <Col style={{padding:0}} md={6}>

                        <ApplicantList />
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
