import React from "react";
import { setCourses } from "../../actions/courseListingsActions";
import {connect} from "react-redux";
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
      courses: courses,
      title: this.props.title,
      description: this.props.description,
      deadline: this.props.deadline,
      status: this.props.status,
      showComponent: true
    };
  }

  componentWillMount(){
    this.props.dispatch(setCourses())
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
