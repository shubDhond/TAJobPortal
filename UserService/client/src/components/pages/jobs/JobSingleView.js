import React from "react";
import {connect} from "react-redux";

import {Col, DropdownButton, Glyphicon, MenuItem, Row} from "react-bootstrap";
import {browserHistory} from "react-router";

@connect((store) => {
    console.log(store);
    return {
        course: store.application.course
    };
})

export default class JobsSingleView extends React.Component {
    render() {
        const {course} = this.props;
        const lorem = "Ted ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
        return (
            <div>
                <h4 style={{marginTop: 22, marginBottom: 15}}>
                    <a onClick={browserHistory.goBack} className="see-more">
                        <Glyphicon glyph="chevron-left"/>Back</a>
                </h4>
                <div className="card">
                    <Row style={{marginBottom: 30}}>
                        <Col xs={8}>

                            <h2 style={{margin: 0, fontWeight: 600}}>
                                CSC302{/*{course.title}*/}
                            </h2>
                        </Col>
                        <Col xs={4} >
                            <h4 className="right-align" style={{
                                margin: 0,
                                fontWeight: 600,
                                borderRadius: 4,
                                background: "#EEE",
                                padding:8
                            }}>
                                RANK #1{/*{course.title}*/}
                            </h4>

                        </Col>
                        {/*<Col xs={8} right>*/}
                        {/*(2) Spaces Left*/}
                        {/*</Col>*/}

                    </Row>
                    <Row>
                        <Col xs={12}>
                            <p>
                                {/*{course.description}*/}
                                {lorem};
                            </p>
                            <br/>
                            <p>
                                Apply by 02-03-2017
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        {/*TODO: MAKE BUTTON TEXT DISPLAY RANKING.*/}
                        <Col xs={12}>
                            <div className="right-align">
                            <DropdownButton  bsStyle="primary" title="I'm interested!">
                                <MenuItem eventKey="1">Preference #1</MenuItem>
                                <MenuItem eventKey="2">Preference #2</MenuItem>
                            </DropdownButton>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
