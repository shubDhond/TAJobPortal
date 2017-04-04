import React from "react";
import {Col, Row} from "react-bootstrap";
import ListItem from "../pages/views/ListItem";
import { browserHistory, Link } from "react-router";
import { setCourses } from "../../actions/courseListingsActions";
import {connect} from "react-redux";
import { setSingleCourse } from "../../actions/courseListingsActions";

import TaCoordSingleView from "./TaCoordSingleView";
import TaCoordJob from "./TaCoordJob";

@connect((store) => {
  return {
    courses : store.courses,
  };
})

export default class TaCoordJobView extends React.Component {
  constructor(props) {
    super(props);
    const {courses} = this.props.courses;
    this.state = {
<<<<<<< HEAD
      courses: courses,
=======
      title: this.props.title,
      description: this.props.description,
      deadline: this.props.deadline,
      status: this.props.status,
      showComponent: true
>>>>>>> origin/master
    };
  }

<<<<<<< HEAD
  componentWillMount(){
    this.props.dispatch(setCourses())
=======
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
>>>>>>> origin/master
  }

  render() {
    var courses = [];
    var object = this.props.courses.courses
    var count = 0;



    for (var id in object) {
      if (object.hasOwnProperty(id)) {
        var course = object[id];
        courses.push(<TaCoordJob showComponent={course.showComponent} title={course.title} status={course.status} id={id} key={count++} description={course.description} deadline={course.deadline}/>)
      }
    }
    return (
      <div>
        {courses}
      </div>
    );
  }
}
