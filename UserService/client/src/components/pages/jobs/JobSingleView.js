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
        rankings: store.rankings,
        user: store.user
    };
})

export default class JobsSingleView extends React.Component {

    componentWillMount(){
        var config = {
            headers: {'x-access-token': this.props.user.user.user_token}
        };
        this.props.dispatch(fetchListing(
            taCoordClient.get("/posting/" + this.props.location.query.id, config)
        ));
    }

    constructor(props) {
        
        super(props);

        this.state = {
            id: this.props.location.query.id,
            course_name: null,
            description: null,
            end_date: null,
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
                course_name: null,
                description: null,
                end_date: null,
                rankings: null
            });
        }

        else if(listing.fetched){
            var course = nextProps.listings.listing.course;

            this.setState({...this.state,
                id: course.id,
                course_name: course.course_name,
                description: course.description,
                requirements: course.requirements,
                end_date: course.end_date,
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
        var ranked = false;

        var object = topJobs;

        for (var rank in object) {
            if (object.hasOwnProperty(rank)) {
              if(object[rank] != null && object[rank].id === this.state.id){
                ranking = "Rank #" + rank;
                ranked = true;
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
                if(object[rank] != null && rank > max) max=rank;
            }
        }   

        if(max === 0){
            preferences.push(<MenuItem key={1} onClick={this.dispatchRankingChange(1)} eventKey={1}>Preference #1</MenuItem>)
        }
        else{
            var i;
            for( i = 1; i <= max; i++){
                if(ranked && ranking === i){
                    continue;
                }else preferences.push(<MenuItem key={i} onClick={this.dispatchRankingChange(i)} eventKey={i}>Preference #{i}</MenuItem>)
            }
            if(max < 5 && !ranked){
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
                                {this.state.course_name}
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
                            <div>
                                <h3>Description:</h3>
                                {this.state.description}
                                <h3>Requirements:</h3>
                                {this.state.requirements}
                            </div>
                            <br/>
                            <p>
                                Apply by {this.state.end_date}
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
