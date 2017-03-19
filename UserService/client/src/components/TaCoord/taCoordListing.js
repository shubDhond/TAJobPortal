import React from "react";
import {Glyphicon, Col, Row} from "react-bootstrap";
import ListItem from "../pages/views/ListItem";
import {Link} from "react-router";

export default class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
        }
    }

    render() {
        return (
            <ListItem>
              <Row>
                {this.state.title}
              </Row>
            </ListItem>
        );
    }
}
