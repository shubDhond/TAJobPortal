import React from "react";
import {Button, Glyphicon, Col, Row} from "react-bootstrap";
import ListItem from "../pages/views/ListItem";
import {  browserHistory, Link } from "react-router";
import { setCourse } from "../../actions/jobItemActions";
import {connect} from "react-redux";
import { fetchListings } from "../../actions/listingsActions";


import TaCoordJobView from "./TaCoordJobView";
import TaCoordSingleView from "./TaCoordSingleView";

@connect((store) => {
  return {
    listings : store.listings
  };
})

export default class TaCoordListing extends React.Component {

  componentWillMount(){
    if(this.props.listings.listings.length === 0){
      this.props.dispatch(fetchListings());
    }
  }

  constructor(props) {
    super(props);
    const {listings} = this.props.listings;
    this.state = {
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
        listings.push(<TaCoordJobView title={listing.title} status={listing.status} id={id} key={count++} description={listing.description} deadline={listing.deadline}/>)
      }
    }

    return (
      <div>
        {listings}
      </div>
    );
  }
}
