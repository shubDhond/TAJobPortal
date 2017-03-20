import React from "react";
import {connect} from "react-redux";
import {Button, Col, ListGroup} from "react-bootstrap";
import Listing from "./TaCoordListing";
import {fetchListings} from "../../actions/listingsActions";
import SearchBar from "./SearchBar";

@connect((store) => {
    return {
        listings: store.listings.listings
    };
})

export default class Courses extends React.Component {
    componentWillMount() {
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
            <div>
                <div style={{background: "#fff", padding: 15, borderBottom: " 1px solid #E0E0E0"}}>
                    <h3 style={{margin: 8}}>Courses</h3>
                    <SearchBar  />
                    {/*<Col xs={2}>*/}
                    {/*<Button type="submit" bsStyle="primary" block={true}>New Ad+</Button>*/}
                    {/*{</Col> THIS SHOULD BE IN THE SEARCHBAR FOR COURSES.}*/}
                </div>
                <div style={{padding: 15}}>
                    <ListGroup>

                        {
                            this.state.listings.map(function (listing, i) {
                                return <Listing title={listing.title} key={i}
                                                description={listing.description}
                                                deadline={listing.deadline}
                                                status={listing.status}/>
                            })
                        }
                    </ListGroup>
                </div>
            </div>
        );
    }
}