import React from "react";
import {Col, Glyphicon, Row} from "react-bootstrap";
import ListItem from "../views/ListItem";
import {connect} from "react-redux";

import {browserHistory} from "react-router";

@connect((store) => {
    return {};
})

export default class JobItemView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            course_name: this.props.course_name,
            description: this.props.description,
            end_date: this.props.end_date,
        }
    }

    routeToView = (path) => {
        return () => {
            browserHistory.push(path);
        }
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...this.state,
            id: nextProps.id,
            course_name: nextProps.course_name,
            description: nextProps.description,
            end_date: nextProps.end_date
        });
    }

    render() {
        return (
            <ListItem>
                <Row style={{marginBottom: 30}}>
                    <Col xs={8}>

                        <h2 style={{margin: 0, fontWeight: 600}}><a
                            onClick={this.routeToView("/app/jobs/single/?id=" + this.props.id)}>
                            {this.state.course_name}
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
                            Apply by {this.state.end_date}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} xsOffset={10}>
                        <a className="see-more right-align" onClick={this.routeToView("/app/jobs/single/?id=" + this.props.id)}>View<Glyphicon glyph="chevron-right"/></a>
                    </Col>
                </Row>

            </ListItem>
        );
    }
}
