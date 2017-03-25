import React from "react";
import { connect } from "react-redux";
import {Pagination, Row,Col} from "react-bootstrap";
import JobItemView from "./JobItemView";
import { taCoordClient } from "../../../axiosClient";
import { fetchListings } from "../../../actions/listingsActions";

@connect((store) => {
  return {
    listings : store.listings
  };
})

export default class Listings extends React.Component {
  
  componentWillMount(){
    if(!this.props.listings.fetched){
          this.props.dispatch(fetchListings(
            taCoordClient.post("/postings")));
    }
  }
  
  constructor(props){
    super(props);
    const {listings} = this.props.listings;

    this.state = {
      listings: listings
    }
  }

  render() {

    var listings = [];

    var object = this.state.listings
    var count = 0;
    for (var id in object) {
        if (object.hasOwnProperty(id)) {
          var listing = object[id];
          listings.push(<JobItemView title={listing.title} ranking={listing.ranking} id={id} key={count++} description={listing.description} deadline={listing.deadline}/>)
        }
    }

    return (
      <div>
        {listings}
        <Row>
          <Col xs={12}
               className="centered">
            <Pagination
                items={10}
                activePage={this.state.activePage}
                onSelect={this.handleSelect} />
          </Col>
        </Row>

      </div>
    );
  }
}
