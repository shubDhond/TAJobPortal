import React from "react";
import {connect} from "react-redux";
import ListItem from "../pages/views/ListItem";
import { Col, Row} from "react-bootstrap";
import { fetchListings } from "../../actions/listingsActions";
import TaCoordJobView from "./TaCoordJobView";

@connect((store) => {
  return {
    listings : store.listings
  };
})

export default class TaCoordSingleView extends React.Component {
  componentWillMount(){
    if(this.props.listings.listings.length === 0){
      this.props.dispatch(fetchListings());
    }
  }

  constructor(props) {
    super(props);
    const {listings} = this.props.listings;
    this.state={
      listings: listings,
      showComponent: false
    };
  }


  render() {
    var listings = [];
    var object = this.state.listings
    var count = 0;
    for (var id in object) {
        if (object.hasOwnProperty(id)) {
          var listing = object[id];
        }
    }

    return (
      <ListItem>
        <h4>
          {this.state.showComponent ?
             <TaCoordJobView /> :
             null
          }
        </h4>

        <Row>
          <Col xs={6}>
            <p>
              Course Description:
            </p>
          </Col>
          <Col xsOffset={10}>
            <button>Edit</button>
          </Col>
        </Row>
        <Row>
          <p>
            {listing.description}
          </p>
          <p>
            {listing.deadline}
          </p>
        </Row>
      </ListItem>
    );
  }
}
