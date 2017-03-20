import React from "react";
import {Button, Glyphicon, Col, Row} from "react-bootstrap";
import ListItem from "../pages/views/ListItem";
import { browserHistory, Link } from "react-router";
import { setCourse } from "../../actions/jobItemActions";
import {connect} from "react-redux";

@connect((store) => {
    return {};
})

export default class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            deadline: this.props.deadline,
            status: this.props.status
        }
    }

    dispatchThenRoute = (myAction, myPath) => {
        return (dispatch) => {
            this.props.dispatch(myAction(this.state));
            browserHistory.push(myPath);
        }
    };

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
                <p>
                  {this.state.description}
                </p>
                {this.state.deadline}
                <a className="see-more right-align" onClick={this.dispatchThenRoute(setCourse, "/app/jobs")}>View<Glyphicon glyph="chevron-right"/></a>              </Row>
            </ListItem>
        );
    }
}
