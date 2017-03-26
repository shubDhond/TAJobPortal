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
            taCoordClient.get("/posting")
          ));
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
    var data;
    const { listings } = this.props;

    if(listings.fetched){
      if(listings.listings.hasOwnProperty("message")){
        data = <h2>No Postings Found.</h2>
      }
      else{
        data = [];
        var object = this.state.listings
        var count = 0;
        for (var id in object) {
            if (object.hasOwnProperty(id)) {
              var listing = object[id];
              data.push(<JobItemView title={listing.title} ranking={listing.ranking} id={id} key={count++} description={listing.description} deadline={listing.deadline}/>)
            }
        }
      }
    }
    else if(listings.fetching){
      data = <h2>Fetching...</h2>
    }
    else if((!listings.fetched && !listings.fetching)){
      data = <h2>No Postings Found.</h2>;
    }

    return (
      <div>
        {data}
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
