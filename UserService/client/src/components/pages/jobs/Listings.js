import React from "react";
import { connect } from "react-redux";
import {Pagination, Row,Col} from "react-bootstrap";
import JobItemView from "./JobItemView";
import { taCoordClient } from "../../../axiosClient";
import { fetchListings } from "../../../actions/listingsActions";

@connect((store) => {
  return {
    listings : store.listings,
    user: store.user
  };
})

export default class Listings extends React.Component {
  
  componentWillMount(){
    if(!this.props.listings.fetched){
      console.log(this.props.user.user.user_token)
      var config = {
        headers: {'x-access-token': this.props.user.user.user_token}
      };
      this.props.dispatch(fetchListings(
        taCoordClient.get("/posting", config)
      ));
    }
  }
  
  constructor(props){
    super(props);
    const {listings} = this.props.listings;

    this.state = {
      listings: listings,
      pagination : {
        data:[],
        numPerPage:3,
        activePage: 1
      },
      
    }
  }

  paginationSet(page, numPerPage, listings){
      var object = listings;
      var keys = Object.keys(object);
      var size = keys.length;

      var index = numPerPage * (page - 1 );
      var keysUsed = keys.splice(index,numPerPage);

      var count = 0;
      var data = [];

      for (var i = 0; i < keysUsed.length; i++) {
        
        var id = keysUsed[i];
        
        if (object.hasOwnProperty(id)) {
          var listing = object[id];
          data.push(<JobItemView course_name={listing.course_name} ranking={listing.ranking} id={id} key={count++} description={listing.description} end_date={listing.end_date}/>)
        }
      }
      
      return data;
  }

  componentWillReceiveProps(nextProps){
    const { listings } = nextProps;

    if(listings.fetched){
            this.setState({...this.state,
              listings: listings.listings
            });
    }

  }

  handleSelect(eventKey) {
    this.setState({...this.state,
      pagination: {...this.state.pagination,
        activePage: eventKey}
    });
  }

  render() {
    var numOfPages = 0;
    var data;

    const { listings } = this.props;
    const { numPerPage } = this.state.pagination;

    if(listings.fetched){
      if(listings.listings.hasOwnProperty("message")){
        data = <h2>No Postings Found.</h2>
      }
      else{
        // get size of listing
        var object = this.state.listings
        
        var size = Object.keys(object).length;

        numOfPages = Math.ceil((size)/numPerPage);

        data = this.paginationSet(this.state.pagination.activePage, numPerPage, object);

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
                className={!listings.fetched? 'hidden':'shown'}
                prev
                next
                first
                last
                ellipsis
                items={numOfPages}
                activePage={this.state.pagination.activePage}
                onSelect={this.handleSelect.bind(this)} />
          </Col>
        </Row>

      </div>
    );
  }
}
