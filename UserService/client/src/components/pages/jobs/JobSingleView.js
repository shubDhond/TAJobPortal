import React from "react";
import {connect} from "react-redux";
import {setRanking} from "../../../actions/rankingActions";
import { setCourse } from "../../../actions/jobItemActions";

import {Col, DropdownButton, Glyphicon, MenuItem, Row} from "react-bootstrap";
import {browserHistory} from "react-router";

@connect((store) => {
    console.log(store)
    
    return {
        listings: store.listings,
        jobView: store.jobView,
        rankings: store.rankings
    };
})

export default class JobsSingleView extends React.Component {
    constructor(props) {

        super(props);

        var course = this.props.listings.listings[this.props.jobView.course.id]

        this.state = {
            id: course.id,
            title: course.title,
            description: course.description,
            deadline: course.deadline,
            rankings: this.props.rankings
        }
    }

    dispatchRankingChange = (newRanking) => {
        return (dispatch) => {
            this.props.dispatch(setRanking(this.state, newRanking));
            this.props.dispatch(setCourse({...this.state, ranking: newRanking}));
        }
    };

    render() {

        const {course} = this.props.jobView;
        const {topJobs} = this.props.rankings;

        var ranking=null;

        var object = topJobs;

        for (var rank in object) {
            if (object.hasOwnProperty(rank)) {
              if(object[rank].id === course.id){
                ranking = "Rank #" + rank;
              }
            }
        }

        if(ranking == null){
            ranking="Not Ranked";
        }

        const lorem = "Ted ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

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
                    <a onClick={browserHistory.goBack} className="see-more">
                        <Glyphicon glyph="chevron-left"/>Back</a>
                </h4>
                <div className="card">
                    <Row style={{marginBottom: 30}}>
                        <Col xs={8}>

                            <h2 style={{margin: 0, fontWeight: 600}}>
                                CSC302{/*{course.title}*/}
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
                                {ranking/*{course.title}*/}
                            </h5>

                        </Col>
                        {/*<Col xs={8} right>*/}
                        {/*(2) Spaces Left*/}
                        {/*</Col>*/}

                    </Row>
                    <Row>
                        <Col xs={12}>
                            <p>
                                {/*{course.description}*/}
                                {lorem};
                            </p>
                            <br/>
                            <p>
                                Apply by 02-03-2017
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        {/*TODO: MAKE BUTTON TEXT DISPLAY RANKING.*/}
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
