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
      title: this.props.title,
      description: this.props.description,
      deadline: this.props.deadline,
      status: this.props.status,
      showComponent: this.props.showComponent
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    this.props.dispatch(setSingleCourse(this.state.title, this.state.description, this.state.status));
    this.props.dispatch(toggleComponent());

  }

  render() {
    return (
      <div>
        <ListItem>
          <h3>{this.state.title}</h3>
          <h5>{this.state.status}</h5>
          <h7>{this.state.description}</h7>
          <h5>{this.state.deadline}</h5>

          <Button onClick={this.buttonClick}>View</Button>
        </ListItem>
      </div>
    );
  }
}
