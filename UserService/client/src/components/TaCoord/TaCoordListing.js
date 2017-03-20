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
    listings : store.listings.listings
  };
})

export default class TaCoordListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
  }
  
    render() {
        return (
          <div>
          <Row>
            {this.state.showComponent ?
               null :
               <TaCoordJobView />
            }
            </Row>
          </div>
        );
    }
}
