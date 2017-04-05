import React from "react";
import { connect } from "react-redux";
import { Button, Row } from "react-bootstrap";
import { toggleComponent } from "../../actions/courseListingsActions";

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
    return (
      <div>
          <Row>
              <Button onClick={this.buttonClick}>Back</Button>
          </Row>
        <Row>
            <h3>{this.props.courses.title}</h3>
            <h5>{this.props.courses.status}</h5>
            <h7>{this.props.courses.description}</h7>
        </Row>


      </div>
    );
  }
}
