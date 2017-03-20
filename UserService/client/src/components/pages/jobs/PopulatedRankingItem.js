import React from "react";
import {Button} from "react-bootstrap";

import {browserHistory} from "react-router";

export default class Populated extends React.Component {
    
    routeToView = (path) => {
        return (dispatch) => {
            browserHistory.push(path);
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
            <Button onClick={this.routeToView("/app/jobs/single/?id=" + this.props.id)} block style={styles}>
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