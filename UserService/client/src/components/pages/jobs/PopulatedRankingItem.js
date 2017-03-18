import React from "react";
import {connect} from "react-redux";
import {Button} from "react-bootstrap";

import { setCourse } from "../../../actions/jobItemActions";

import {browserHistory} from "react-router";

@connect((store) => {
    return {};
})

export default class Populated extends React.Component {
    
    dispatchThenRoute = (myAction, myPath) => {
        return (dispatch) => {
            this.props.dispatch(myAction(this.state));
            browserHistory.push(myPath);
        }
    };

    render() {
        const styles = {
            border: "1px solid #E0E0E0",
            borderRadius: 4,
            background: "#ffffff",
            padding: 16,
            textAlign:"left",
            marginBottom: 15
        };
        return (
            <Button onClick={this.dispatchThenRoute(setCourse, "/app/jobs/single")} block style={styles}>
                <h4 style={{
                    display: "inline-block",
                    padding:8,
                    background: "#EEEEEE",
                    margin:0,
                    marginRight:16,
                    borderRadius: 4,
                }}>{this.props.ranking}</h4>
                <h4 style={{color: "#9E9E9E", display: "inline-block"}}><a>{this.props.name}</a></h4>
            </Button>
        );
    }
}