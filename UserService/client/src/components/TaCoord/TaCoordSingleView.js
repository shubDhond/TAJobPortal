import React from "react";
import {connect} from "react-redux";
import ListItem from "../pages/views/ListItem";
import {Button, Col, DropdownButton, Glyphicon, MenuItem, Row} from "react-bootstrap";
import {browserHistory} from "react-router";
import { setCourse } from "../../actions/courseActions";
import { fetchCourses } from "../../actions/courseListingsActions";
import { toggleComponent } from "../../actions/courseListingsActions";
import { setSingleCourse } from "../../actions/courseListingsActions";
import { fetchSingleCourse } from "../../actions/courseListingsActions";

import TaCoordListing from "./TaCoordListing";
import TaCoordJobView from "./TaCoordJobView";

@connect((store) => {
  return {
    courses : store.courses
  };
})

export default class TaCoordSingleView extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    this.props.dispatch(toggleComponent());

  }

  render() {
    console.log(this.props.courses.title);
    return (
      <div>
        <Row>
            <h3>{this.props.courses.title}</h3>
            <h5>{this.props.courses.status}</h5>
            <h7>{this.props.courses.description}</h7>
        </Row>

        <Row>
        <Button onClick={this.buttonClick}>Button</Button>
        </Row>
      </div>
    );
  }
}
