import React from "react";
import { connect } from "react-redux";
import { Button, Row } from "react-bootstrap";
import { toggleComponent } from "../../actions/courseListingsActions";
import { taCoordClient } from "../../axiosClient";
import { getAssignments } from "../../actions/assignmentsActions"
import { fetchListing } from "../../actions/listingsActions";
import ListItem from "../pages/views/ListItem";

@connect((store) => {
  return {
    user: store.user,
    courses : store.courses,
    listings: store.listings,
    assignments: store.assignments
  };
})

export default class TaCoordSingleView extends React.Component {

  componentWillMount(){

    var config = {
        headers: {'x-access-token': this.props.user.user.user_token}
    };
    this.props.dispatch(fetchListing(
        taCoordClient.get("/posting/" + this.props.courses.posting_id, config)
    ));

    if(!this.props.assignments.fetched){
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
      tas_needed: null,
      term: null,
      assignments : []
    }
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    this.props.dispatch(toggleComponent());

  }

  componentWillReceiveProps(nextProps){
    const { listing } = nextProps.listings;

    if(nextProps.assignments.fetched){
      //look for course_id matching this one
      let assignments = nextProps.assignments.assignments
      for(var i = 0; i < assignments.length; i++){
        if(assignments[i].course_id==this.props.courses.course_id){
          this.setState({
            assignments: assignments[i].ta_assignments
          })

          break;
        }
      }
    }

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
    let tas = []
    let count = 0

    for(var ta in this.state.assignments){
      tas.push(<h5 key={count++}>{this.state.assignments[ta].student_id}</h5>)
    }
    return (
      <div>
        <ListItem>
          <Row>
            <h3>{this.state.course_name}</h3>
            <h7>{this.state.requirements}</h7>
            <h5>{this.state.end_date}</h5>
            <h5>{this.state.term}</h5>
            <h5>{this.state.tas_needed}</h5>
          </Row>

          {tas}

          <Row>
            <Button onClick={this.buttonClick}>Button</Button>
          </Row>

        </ListItem>
      </div>
    );
  }
}
