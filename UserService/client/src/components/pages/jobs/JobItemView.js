import React from "react";
import {Col, Glyphicon, Row} from "react-bootstrap";
import ListItem from "../views/ListItem";
import {connect} from "react-redux";

import { setCourse } from "../../../actions/jobItemActions";

import {browserHistory} from "react-router";

@connect((store) => {
    return {};
})

export default class JobItemView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            description: this.props.description,
            deadline: this.props.deadline,
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
                <Row style={{marginBottom: 30}}>
                    <Col xs={8}>

                        <h2 style={{margin: 0, fontWeight: 600}}><a
                            onClick={this.dispatchThenRoute(setCourse, "/app/jobs/single/?id=" + this.props.id)}>
                            {this.state.title}
                        </a></h2>
                    </Col>

                </Row>
                <Row>
                    <Col xs={12}>
                        <p>
                            {this.state.description}
                        </p>
                        <br/>
                        <p>
                            Apply by 02-03-2017
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} xsOffset={10}>
                        <a className="see-more right-align" onClick={this.dispatchThenRoute(setCourse, "/app/jobs/single/?id=" + this.props.id)}>View<Glyphicon glyph="chevron-right"/></a>
                    </Col>
                </Row>

            </ListItem>
        );
    }
}
