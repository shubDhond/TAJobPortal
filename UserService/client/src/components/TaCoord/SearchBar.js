import React from "react";
import {Button, Col, FormControl, FormGroup, Row, SplitButton, MenuItem} from "react-bootstrap";
export default class SearchBar extends React.Component {
    render() {
        return (
            <FormGroup>
            <Row>
                <Col xs={7}  style={{paddingRight:0}}>
                        <FormControl bsSize="large" type="text" placeholder="Search"/>
                </Col>
                <Col xs={5}>
                    <SplitButton title="Search" pullRight id="split-button-pull-right">
                        <MenuItem eventKey="1">By Program</MenuItem>
                        <MenuItem eventKey="2">By Year</MenuItem>

                    </SplitButton>
                </Col>
            </Row>
            </FormGroup>
        );
    }
}
