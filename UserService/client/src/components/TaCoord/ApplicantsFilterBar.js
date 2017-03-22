import React from "react";
import {Button, Col, FormControl, FormGroup, Row, DropdownButton, MenuItem} from "react-bootstrap";
export default class ApplicantsFilterBar extends React.Component {
    render() {
        return (
            <FormGroup style={{marginBottom:0}}>
            <Row>
                <Col xs={10}  style={{paddingRight:0}}>
                        <FormControl bsSize="large" type="text" placeholder="Search"/>
                </Col>
                <Col xs={2}>
                    <DropdownButton bsSize="large" title=" Sort By" pullRight id="split-button-pull-right">
                        <MenuItem eventKey="1">Year</MenuItem>
                        <MenuItem eventKey="2">Program</MenuItem>
                        <MenuItem eventKey="3">Grad Students</MenuItem>
                        <MenuItem eventKey="4">Undergrads</MenuItem>
                        <MenuItem eventKey="5">Unassigned</MenuItem>

                    </DropdownButton>
                </Col>
            </Row>
            </FormGroup>
        );
    }
}
