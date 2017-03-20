import React from "react";
import {connect} from "react-redux";
import ListItem from "../pages/views/ListItem";
import {Button, Col, DropdownButton, Glyphicon, MenuItem, Row} from "react-bootstrap";
import {browserHistory} from "react-router";
import { setCourse } from "../../actions/jobItemActions";

import TaCoordListing from "./TaCoordListing";
import TaCoordJobView from "./TaCoordJobView";

@connect((store) => {
    console.log(store);
    return {
        listings : store.listings.listings
    };
})

export default class TaCoordSingleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    };
  }

    render() {
      return (
          <ListItem>
            <h4>
              {this.state.showComponent ?
                 <TaCoordJobView /> :
                 null
              }
            </h4>

            <Row>
              <Col xs={6}>
                <p>
                  Course Description:
                </p>
              </Col>
              <Col xsOffset={10}>
                <button>Edit</button>
              </Col>
            </Row>
            <Row>
              <p>
                This course is an introduction to the theory and practice of large-scale software system design, development, and deployment. Topics include project management; advanced UML; reverse engineering; requirements inspection; verification and validation software architecture; performance modeling and analysis.
              </p>
            </Row>


{/*            <Row>
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
