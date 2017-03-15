import React from "react";
import {Col, Glyphicon, Row} from "react-bootstrap";
import ListItem from "../views/ListItem";
import {connect} from "react-redux";

import {browserHistory, Link} from "react-router";

@connect((store) => {
    return {};
})

export default class JobItemView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            deadline: this.props.deadline
        }
    }

    dispatchThenRoute = (myAction, myPath) => {
        return (dispatch) => {
            this.props.dispatch(myAction)
            browserHistory.push(myPath);
        }
    };

    render() {
        return (
            <ListItem>
                <Row style={{marginBottom: 30}}>
                    <Col xs={4}>

                        <h2 style={{margin: 0, fontWeight: 600}}><a>
                            {this.state.title}
                        </a></h2>
                    </Col>
                    {/*<Col xs={8} right>*/}
                    {/*(2) Spaces Left*/}
                    {/*</Col>*/}

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
                        <a className="see-more right-align" onClick={this.dispatchThenRoute({
                            type: "SET_COURSE",
                            payload: {
                                title: this.state.title,
                                description: this.state.description,
                                deadline: this.state.deadline
                            }
                        }, "/app/jobs/single")}><Link>View<Glyphicon glyph="chevron-right"/></Link></a>
                    </Col>
                </Row>

            </ListItem>
        );
    }
}
