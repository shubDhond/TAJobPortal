import React from "react";
import {connect} from "react-redux";
import {ListGroup} from "react-bootstrap";
import TaCoordListing from "./TaCoordListing";
import JobsFilterBar from "../Login/JobsFilterBar";

@connect((store) => {
    return {};
})

export default class Courses extends React.Component {
    render() {
        return (
            <div>
                <div style={{background: "#fff", padding: 15, borderBottom: " 1px solid #E0E0E0"}}>
                    <h3 style={{margin: 8}}>Courses</h3>
                    <JobsFilterBar  />

                </div>
                <div style={{padding: 15}}>
                    <ListGroup>

                        <TaCoordListing />
                    </ListGroup>
                </div>
            </div>

        );
    }
}
