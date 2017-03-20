import React from "react";
import {Button, Col, FormControl, FormGroup, Row, SplitButton, MenuItem} from "react-bootstrap";
export default class ApplicantSearchBar extends React.Component {
    render() {
        return (
            <FormGroup>
            <Row>
                <Col xs={7}  style={{paddingRight:0}}>
                        <FormControl bsSize="large" type="text" placeholder="Search"/>
                </Col>
                <Col xs={5}>
                    <SplitButton title="Sort By" pullRight id="split-button-pull-right">
                        <MenuItem eventKey="1">Year</MenuItem>
                        <MenuItem eventKey="2">Program</MenuItem>
                        <MenuItem eventKey="3">Grad Students</MenuItem>
                        <MenuItem eventKey="4">Undergrads</MenuItem>
                        <MenuItem eventKey="5">Unassigned</MenuItem>

                    </SplitButton>
                </Col>
            </Row>
            </FormGroup>
        );
    }
}
