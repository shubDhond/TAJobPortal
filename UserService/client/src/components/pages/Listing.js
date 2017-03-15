import React from "react";
import {Glyphicon, Col, Row} from "react-bootstrap";
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
                <Row style={{marginBottom: 24}}>
                    <Col xs={4}>

                        <a> <h2 style={{margin: 0 ,fontWeight:600}}>
                            {this.state.title}
                        </h2></a>
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
                    <Col xs={2} xsOffset={10} >
                        <a className="see-more right-align"><Link>View<Glyphicon glyph="chevron-right" /></Link></a>
                    </Col>
                </Row>
            </ListItem>
        );
    }
}
