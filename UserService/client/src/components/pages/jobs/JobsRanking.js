import React from "react";
import { connect } from "react-redux";
import {Pagination, Row,Col} from "react-bootstrap";
import { fetchListings } from "../../../actions/listingsActions";
import RankingItemView from "./RankingItemView";

@connect((store) => {
  return {
    listings : store.listings.listings
  };
})

export default class JobsRanking extends React.Component {

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
          <h3 style={{marginBottom:15}}>Rankings</h3>
        {
          this.state.listings.map(function(listing, i){
            return <RankingItemView title={listing.title} key={i} description={listing.description}
                                deadline={listing.deadline}/>
          })
        }


      </div>
    );
  }
}
