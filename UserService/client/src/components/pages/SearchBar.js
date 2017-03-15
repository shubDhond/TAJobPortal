import React from "react";
import {Button, Col, FormControl, FormGroup, Row} from "react-bootstrap";
export default class SearchBar extends React.Component {
    render() {
        return (
            <FormGroup>
            <Row>
                <Col xs={10}  style={{paddingRight:0}}>

                        <FormControl bsSize="large" type="text" placeholder="Search"/>
                </Col>
                <Col xs={2}>
                <Button type="submit" bsSize="large" block="true">Search</Button>
                </Col>
            </Row>
            </FormGroup>
        );
    }
}
