import React from "react";
import {Button, Glyphicon, Col, Row} from "react-bootstrap";
import ListItem from "../pages/views/ListItem";
import {Link} from "react-router";

export default class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            deadline: this.props.deadline
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
                  <Button type="submit" bsSize="small" block={true}>New Ad</Button>
                </Col>
              </Row>
              <Row>
                <p>
                  {this.state.description}
                </p>
                <a className="see-more right-align"><Link>View<Glyphicon glyph="chevron-right" /></Link></a>
              </Row>
            </ListItem>
        );
    }
}
