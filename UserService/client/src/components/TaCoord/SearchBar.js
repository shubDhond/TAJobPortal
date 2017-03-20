import React from "react";
import {Button, Col, FormControl, FormGroup, Row, SplitButton, MenuItem} from "react-bootstrap";
export default class SearchBar extends React.Component {
    render() {
        return (
            <FormGroup style={{margin: 0}}>
            <Row>
                <Col xs={7}  style={{paddingRight:0}}>
                        <FormControl bsSize="large" type="text" placeholder="Search"/>
                </Col>
                <Col xs={5}>
                    <SplitButton title="Sort By" pullRight id="split-button-pull-right">
                        <MenuItem eventKey="1">Year</MenuItem>
                        <MenuItem eventKey="2">Program</MenuItem>


                    </SplitButton>
                </Col>
            </Row>
            </FormGroup>
        );
    }
}
