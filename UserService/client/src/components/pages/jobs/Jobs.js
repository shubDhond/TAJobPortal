import React from "react";
import SearchBar from "../SearchBar";
import {Col, Row} from "react-bootstrap";
import JobsRanking from "./JobsRanking";
import {Sticky, StickyContainer} from "react-sticky";
export default class Jobs extends React.Component {
    render() {

        return (

            <StickyContainer  >
                <SearchBar  />
                <Row>
                    <Col md={8} style={{paddingRight:0}}>
                        {this.props.children}
                    </Col>
                    <Col md={4}>
                        <Sticky topOffset={-82} stickyStyle={{marginTop: 102}}>
                            <JobsRanking />
                        </Sticky>

                    </Col>
                </Row>
            </StickyContainer>

        );
    }
}
