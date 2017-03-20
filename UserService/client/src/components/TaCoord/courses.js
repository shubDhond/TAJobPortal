import React from "react";
import { connect } from "react-redux";
import { Button, Col, ListGroupItem, ListGroup, Row } from 'react-bootstrap';
import TaCoordListing from "./TaCoordListing";
import { fetchListings } from "../../actions/listingsActions";
import SearchBar from "./SearchBar";


export default class Courses extends React.Component {
	render() {
  	return (
    	<div className="card">
        <Row>
          <Col xs={10}>
            <SearchBar />
          </Col>
          <Col xs={2}>
            <Button type="submit" bsSize="small" block={true}>New Ad</Button>
          </Col>
        </Row>
        <ListGroup>
          <TaCoordListing />
		    </ListGroup>
    	</div>
  	);
	}
}
