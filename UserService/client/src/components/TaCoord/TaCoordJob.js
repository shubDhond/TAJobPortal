import React from "react";
import { Button } from "react-bootstrap";
import ListItem from "../pages/views/ListItem";
import { toggleComponent } from "../../actions/courseListingsActions";
import { setSingleCourse } from "../../actions/courseListingsActions";
import { connect } from "react-redux";
import { LazyLoad } from "react-lazy-load";

@connect((store) => {
  return {
    courses : store.courses
  };
})

export default class TaCoordJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course_name: this.props.course_name,
      requirements: this.props.requirements,
      end_date: this.props.end_date,
      showComponent: this.props.showComponent,
      course_id: this.props.course_id,
      posting_id: this.props.posting_id
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    this.props.dispatch(setSingleCourse(this.state));
    this.props.dispatch(toggleComponent());

  }

  render() {
    return (
      <div>
        <ListItem>
          <h3>{this.state.course_name}</h3>
          <h7>{this.state.requirements}</h7>
          <h5>{this.state.end_date}</h5>

          <Button onClick={this.buttonClick}>Button</Button>
        </ListItem>
      </div>
    );
  }
}
