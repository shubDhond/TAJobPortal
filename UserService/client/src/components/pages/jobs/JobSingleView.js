import React from "react";
import {connect} from "react-redux";
import {setRanking} from "../../../actions/rankingActions";
import { fetchListing } from "../../../actions/listingsActions";
import {Col, DropdownButton, Glyphicon, MenuItem, Row} from "react-bootstrap";
import {browserHistory} from "react-router";
import { taCoordClient } from "../../../axiosClient";

@connect((store) => {
    
    return {
        listings: store.listings,
        rankings: store.rankings
    };
})

export default class JobsSingleView extends React.Component {

    componentWillMount(){
        this.props.dispatch(fetchListing(
            taCoordClient.get("/posting/" + this.props.location.query.id)
        ));
    }

    constructor(props) {
        
        super(props);

        this.state = {
            id: this.props.location.query.id,
            title: null,
            description: null,
            deadline: null,
            rankings: null,
        }
    }
    
    componentWillReceiveProps(nextProps){
        const { listing } = nextProps.listings;

        if(this.state.id !== nextProps.location.query.id){
            this.props.dispatch(fetchListing(
                taCoordClient.get("/posting/" + nextProps.location.query.id)
            ));

            this.setState({...this.state,
                id: nextProps.location.query.id,
                title: null,
                description: null,
                deadline: null,
                rankings: null
            });
        }

        else if(listing.fetched){
            var course = this.props.listings.listing.course;

            this.setState({...this.state,
                id: course.id,
                title: course.title,
                description: course.description,
                deadline: course.deadline,
                rankings: nextProps.rankings
            });
        }
    }

    dispatchRankingChange = (newRanking) => {
        return (dispatch) => {
            this.props.dispatch(setRanking(this.state, newRanking));
        }
    };
    
    goBackToJobs= () =>{
        return () => {
            browserHistory.push("/app/jobs")
        }
    }

    render() {
        const { listing } = this.props.listings;

        if(listing.fetching){
            return(<h2>Fetching...</h2>)
        }
        else if(!listing.fetched && !listing.fetching){
            return(<h2>No posting found.</h2>)
        }

        const {topJobs} = this.props.rankings;

        var ranking=null;

        var object = topJobs;

        for (var rank in object) {
            if (object.hasOwnProperty(rank)) {
              if(object[rank].id === this.state.id){
                ranking = "Rank #" + rank;
              }
            }
        }

        if(ranking == null){
            ranking="Not Ranked";
        }

        var preferences=[];

        var object = topJobs;
        var max = 0;
        for (var rank in object) {
            if (object.hasOwnProperty(rank)) {
                if(rank > max) max=rank;
            }
        }   

        if(!this.props.rankings.jobsRanked){
            preferences.push(<MenuItem key={1} onClick={this.dispatchRankingChange(1)} eventKey={1}>Preference #1</MenuItem>)
        }
        else{
            var i;
            for( i = 1; i <= max; i++){
                preferences.push(<MenuItem key={i} onClick={this.dispatchRankingChange(i)} eventKey={i}>Preference #{i}</MenuItem>)
            }
            if(max < 5){
                preferences.push(<MenuItem key={i} onClick={this.dispatchRankingChange(i)} eventKey={i}>Preference #{i}</MenuItem>)
            }
        }

        return (
            <div>
                <h4 style={{marginTop: 22, marginBottom: 15}}>
                    <a onClick={this.goBackToJobs()} className="see-more">
                        <Glyphicon glyph="chevron-left"/>Back</a>
                </h4>
                <div className="card">
                    <Row style={{marginBottom: 30}}>
                        <Col xs={8}>

                            <h2 style={{margin: 0, fontWeight: 600}}>
                                {this.state.title}
                            </h2>
                        </Col>
                        <Col xs={4} >
                            <h5 className="right-align" style={{
                                margin: 0,
                                fontWeight: 600,
                                borderRadius: 4,
                                background: "#EEE",
                                padding:8
                            }}>
                                {ranking}
                            </h5>

                        </Col>
                        {/*<Col xs={8} right>*/}
                        {/*(2) Spaces Left*/}
                        {/*</Col>*/}

                    </Row>
                    <Row>
                        <Col xs={12}>
                            <p>
                                {this.state.description}
                            </p>
                            <br/>
                            <p>
                                Apply by 02-03-2017
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className="right-align">
                            <DropdownButton id="1" bsStyle="primary" title="I'm interested!">
                                {preferences}
                            </DropdownButton>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
