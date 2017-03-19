import React from "react";
import { connect } from "react-redux";
import { Button, ListGroupItem, ListGroup } from 'react-bootstrap';
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
        <Button type="submit" bsSize="small" block={true}>New Ad</Button>
      	<ListGroup>

          {
            this.state.listings.map(function(listing, i){
              return <Listing title={listing.title} key={i} description={listing.description}
              deadline={listing.deadline} status={listing.status}/>
            })
          }
		    </ListGroup>
    	</div>
  	);
	}
}
