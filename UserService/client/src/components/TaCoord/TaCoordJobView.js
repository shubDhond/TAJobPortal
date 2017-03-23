import React from "react";
import {Col, Row} from "react-bootstrap";
import ListItem from "../pages/views/ListItem";
import {connect} from "react-redux";

import TaCoordSingleView from "./TaCoordSingleView";

@connect((store) => {
  return {};
})

export default class TaCoordJobView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      deadline: this.props.deadline,
      status: this.props.status,
        showComponent: true
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    if (this.state.showComponent) {
      this.setState({
        showComponent: false
      });
    }else{
      this.setState({
        showComponent: true
      });
    }
  }

  render() {
    return (
      <ListItem>
        <Row>
          <Col xs={6}>
            <h3>{this.state.title}</h3>
          </Col>
          <Col xsOffset={10}>
            <h7>{this.state.status}</h7>
          </Col>
        </Row>
        <Row>
        {this.state.showComponent ?
           <TaCoordSingleView /> :
           null
        }
        </Row>
        <Row>
        {/*<Button onClick={this.buttonClick}>Button</Button>*/}
        </Row>
      </ListItem>
    );
  }
}
