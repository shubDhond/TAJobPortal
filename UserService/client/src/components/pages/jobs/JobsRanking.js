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
        {
          this.state.listings.map(function(listing, i){
            return <RankingItemView title={listing.title} key={i} description={listing.description}
                                deadline={listing.deadline}/>
          })
        }
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
