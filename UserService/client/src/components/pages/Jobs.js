import React from "react";
import { connect } from "react-redux";

import Listing from "./Listing";
import SearchBar from "./SearchBar";

import { fetchListings } from "../../actions/listingsActions";
@connect((store) => {
  return {
    listings : store.listings.listings
  };
})

export default class Jobs extends React.Component {

  componentWillMount(){
    this.state = {...this.state, listings: this.props.dispatch(fetchListings).payload};
  }
  constructor(props){
    super(props);
    this.state = {
      listings: []
    }
  }
  render() {

    return (
      <div>

        <SearchBar  />
        {
          this.state.listings.map(function(listing, i){
            return <Listing title={listing.title} key={i} description={listing.description}
            deadline={listing.deadline}/>
          })
        }
      </div>
    );
  }
}
