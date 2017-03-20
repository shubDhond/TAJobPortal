import React from "react";
import {connect} from "react-redux";
import {Button, Col, ListGroup, Row} from "react-bootstrap";
import Listing from "./TaCoordListing";
import {fetchListings} from "../../actions/listingsActions";
import SearchBar from "./SearchBar";

@connect((store) => {
    return {
        listings: store.listings.listings
    };
})

export default class Courses extends React.Component {
    componentWillMount() {
        this.state = {...this.state, listings: this.props.dispatch(fetchListings).payload};
    }

    constructor(props) {
        super(props);
        this.state = {
            listings: []
        }
    }

    render() {
        return (
            <Col xs={12} style={{padLeft:14,borderLeft:"1px solid #E0E0E0"}}>
                <h3>Courses</h3>
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
            </Col>
        );
    }
}
