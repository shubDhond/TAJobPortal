import React from "react";
import { taCoordClient } from "../../axiosClient";
import { fetchListings } from "../../actions/listingsActions";
import { createAssignment } from "../../actions/assignmentsActions";
import { resetAd } from "../../actions/courseActions";
import {connect} from "react-redux";
import TaCoordJob from "./TaCoordJob";
import LazyLoad from 'react-lazy-load';
import {Accordion} from 'react-bootstrap';
import {Droppable} from 'react-drag-and-drop';

@connect((store) => {
  return {
    listings : store.listings,
    user: store.user,
    assignments: store.assignments,
    courses: store.courses
  };
})

export default class TaCoordJobView extends React.Component {
  constructor(props) {
    super(props);
    const {listings} = this.props.listings;
    this.state = {
      showComponent: true
    };
  }

  componentWillMount(){
    if(!this.props.listings.fetched){
      var config = {
        headers: {'x-access-token': this.props.user.user.user_token}
      };
      this.props.dispatch(fetchListings(
        taCoordClient.get("/posting", config)
      ));
    }
  }

  buttonClick() {
    if (this.state.showComponent) {
      this.setState({
        showComponent: false
      });
    } else {
      this.setState({
        showComponent: true
      });
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.courses.posted){
      var config = {
        headers: {'x-access-token': this.props.user.user.user_token}
      };
      this.props.dispatch(resetAd())
      this.props.dispatch(fetchListings(
        taCoordClient.get("/posting", config)
      ));
    }
  }

  getCourses(){
    if (this.props.listings.listings){
        var listings = [];
        var object = this.props.listings.listings
        var count = 0;

        for (var id in object) {
            if (object.hasOwnProperty(id)) {
                var course = object[id];
                listings.push(course)
            }
        }

        return Object.keys(listings).map((course) => {
          let dragOverStyle = {};

          if (this.state.dragOver === course) {
            dragOverStyle['border'] = '2px solid green';
          }

          return (
              <Droppable types={['applicant']}
                          onDragOver={() => this.setState({...this.state, dragOver: course})}
                          onDragLeave={() => this.setState({...this.state, dragOver: null})}
                          key={course}
                          style={dragOverStyle}
                          onDrop={(data) => this.assignApplicant({
                            ...JSON.parse(data.applicant),
                            posting_id: listings[course].posting_id,
                            course_id: listings[course].course_id
                          })}>
                <TaCoordJob showComponent={listings[course].showComponent} course_name={listings[course].course_name} requirements={listings[course].requirements} course_id={listings[course].course_id} posting_id={listings[course].posting_id} end_date={listings[course].end_date}/>
              </Droppable>
          );
        });
    }else {
        return null
    }
  }

  assignApplicant(assignment) {
    var config = {
      headers: {'x-access-token': this.props.user.user.user_token}
    };
    this.setState({...this.state, dragOver: null});
    this.props.dispatch(createAssignment(
      taCoordClient.post('/assignment', {
        ...assignment
      }, config)
    ));
  }

  render() {
    if (this.props.assignments.assignment) {
      console.log(this.props.assignments.assignment);
    }

    return (
        <div style={{overflow: 'auto', maxHeight: 500}}>
          <div className="filler" />
          <LazyLoad height={762} offsetVertical={300}>
            <Accordion>
                {this.getCourses()}
            </Accordion>
          </LazyLoad>
          <div className="filler" />
        </div>

    );
  }
}
