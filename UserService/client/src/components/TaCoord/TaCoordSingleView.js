import React from "react";
import {connect} from "react-redux";
import {Col, Glyphicon, Row} from "react-bootstrap";
import {toggleComponent} from "../../actions/courseListingsActions";
import {taCoordClient} from "../../axiosClient";
import {getAssignments} from "../../actions/assignmentsActions";
import {fetchListing} from "../../actions/listingsActions";
import ApplicantListItem from "./ApplicantListItem";

@connect((store) => {
    return {
        user: store.user,
        courses: store.courses,
        listings: store.listings,
        assignments: store.assignments
    };
})

export default class TaCoordSingleView extends React.Component {

    componentWillMount() {

        var config = {
            headers: {'x-access-token': this.props.user.user.user_token}
        };
        this.props.dispatch(fetchListing(
            taCoordClient.get("/posting/" + this.props.courses.posting_id, config)
        ));

        if (!this.props.assignments.fetched) {
            var config = {
                headers: {'x-access-token': this.props.user.user.user_token}
            };
            this.props.dispatch(getAssignments(
                taCoordClient.get('/assignment', config)
            ));
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            course_id: null,
            posting_id: null,
            course_name: null,
            requirements: null,
            end_date: null,
            start_date: null,
            tas_needed: null,
            term: null,
            assignments: []
        }
    }

    toggleBack() {
        this.props.dispatch(toggleComponent());

    }
  componentWillReceiveProps(nextProps) {
    const {listing} = nextProps.listings;

    if(listing.fetched){
        var course = nextProps.listings.listing.course;

        this.setState({...this.state,
            posting_id: course.id,
            course_id: course.course_id,
            course_name: course.course_name,
            requirements: course.requirements,
            end_date: course.end_date,
            tas_needed: course.tas_needed,
            term: course.term,
        });
    }
  }

  render() {
    let tas = [];
    let count = 0;

    const headingstyle = {
        marginTop: 8,
        marginBottom: 4
    }


    if(this.props.assignments.assignments){
      //look for course_id matching this one
      let assignments = this.props.assignments.assignments;
      for(var i = 0; i < assignments.length; i++){
        if(assignments[i].course_id===this.state.course_id){
          if(assignments[i].ta_assignments.length){

            for(var ta in assignments[i].ta_assignments){
              let assignment = assignments[i].ta_assignments[ta];
              tas.push(<ApplicantListItem key={ta} course_id={this.state.course_id} student_id={assignment.student_id} user_id={assignment.application.user_id} application_id={assignment.application._id} posting_id={assignment.posting_id}/>)
            }
          }
          break;
        }
      }
    }

      return (

          <div style={{padding: 15}}>
              <h4 style={{marginBottom: 15}}>
                  <a onClick={this.toggleBack.bind(this)} className="see-more">
                      <Glyphicon glyph="chevron-left"/>Back</a>
              </h4>
              <div className="card">
                  <div style={{display: 'flex'}}>
                      <h3 style={{flexGrow: 1, marginTop: 0, marginBottom: 16}}>
                          {this.state.course_name}</h3>
                      <h5 style={{marginTop: 0, marginRight: 16, alignSelf: "flex-start"}}>
                          Start: TODO: START DATE</h5>
                      <h5 style={{marginTop: 0, alignSelf: "flex-start"}}>
                          End: {this.state.end_date}</h5>
                  </div>
                  <Row>
                      <Col xs={12}>
                          <div>
                              <h6 style={headingstyle}>Requirements:</h6>
                              {this.state.requirements}
                              <div style={{marginTop: 32}}/>
                              <h6 style={headingstyle}>Term:</h6>
                              {this.state.term}
                              <h6 style={headingstyle}>TAs Needed:</h6>
                              {this.state.tas_needed}
                          </div>
                      </Col>
                  </Row>
                  <div>{tas}
                  </div>

              </div>
          </div>
      );
  }
}

