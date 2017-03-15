import React from "react";
import {Col, Row} from "react-bootstrap";
import ListItem from "./views/ListItem";
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
                    <Col xs={4}>
                    <h2 style=""{{padding:16}}>
                        {this.state.title}
                    </h2>
                    </Col>
                    <Col xs={6} right>
                    </Col>
                </Row>

                <Row>
                    <p>
                    {this.state.description}
                    </p>
                </Row>
                <Row>
                    Apply by: {this.state.deadline}
                </Row>
                <Row>
                    <Col xs={2} xsOffset={10}>
                        <a><Link>View</Link></a>
                    </Col>
                </Row>
            </ListItem>
        );
    }
}
