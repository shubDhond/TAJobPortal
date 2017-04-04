import React from "react";
import {Button, Glyphicon, Col, Row} from "react-bootstrap";
import ListItem from "../pages/views/ListItem";
import {  browserHistory, Link } from "react-router";
import { setCourse } from "../../actions/courseActions";
import {connect} from "react-redux";
import { fetchCourses } from "../../actions/courseListingsActions";

import TaCoordJobView from "./TaCoordJobView";
import TaCoordSingleView from "./TaCoordSingleView";

@connect((store) => {
  return {
    courses : store.courses
  };
})

export default class TaCoordListing extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {


    return (
      <div>
        {this.props.courses.showComponent ?
          <TaCoordSingleView /> :
          <TaCoordJobView />
        }
      </div>
    );
  }
}
