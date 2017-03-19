import React from "react";
import { connect } from "react-redux";
import { ListGroupItem, ListGroup } from 'react-bootstrap';
import Listing from "./taCoordListing";
import { fetchListings } from "../../actions/listingsActions";
import SearchBar from "./SearchBar";

@connect((store) => {
  return {
    listings : store.listings.listings
  };
})

export default class Courses extends React.Component {
  componentWillMount(){
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
    	<div className="card">
        <SearchBar />
      	<ListGroup>
          {
            this.state.listings.map(function(listing, i){
              return <Listing title={listing.title} key={i}
              deadline={listing.deadline}/>
            })
          }
		    </ListGroup>
    	</div>
  	);
	}
}
