import React from "react";
import {Button, Glyphicon, Col, Row} from "react-bootstrap";
import ListItem from "../pages/views/ListItem";
import { browserHistory, Link } from "react-router";
import { setCourse } from "../../actions/jobItemActions";
import {connect} from "react-redux";

import TaCoordSingleView from "./TaCoordSingleView";

@connect((store) => {
  return {
    listings : store.listings.listings
  };
})

export default class TaCoordJobView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      showComponent: false
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    console.log(this.state.showComponent);
    if (this.state.showComponent) {
      this.setState({
        showComponent: false
      });
      console.log(this.state.showComponent);
      console.log("hello");
    }else{
      this.setState({
        showComponent: true
      });
      console.log(this.state.showComponent);
      console.log("bye");
    }
  }


    render() {
        return (
            <ListItem>
              <Row>
                <Col xs={6}>
                  <h3>CSC302</h3>
                </Col>
                <Col xsOffset={10}>
                  <h7>ASSIGNED</h7>
                </Col>
              </Row>
              <Row>
              {this.state.showComponent ?
                 <TaCoordSingleView /> :
                 null
              }
              </Row>
              <Row>
              <Button onClick={this.buttonClick}>Button</Button>
              </Row>
{/*             <Row>
                  <Col xs={6}>
                  <h3>{this.props.listings.title}</h3>
                </Col>
                <Col xsOffset={10}>
                  <h7>{this.props.listings.status}</h7>
                </Col>
              </Row>
              <Row>
                <p>
                  {this.props.listings.description}
                </p>
                {this.props.listings.deadline}
              </Row>
*/}
            </ListItem>
        );
    }
}
