import React from "react";
import {Glyphicon,Button} from "react-bootstrap";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {deleteRanking} from "../../../actions/rankingActions";

@connect((store) => {
    return {};
})

export default class Populated extends React.Component {
    
    routeToView = (path) => {
        return (dispatch) => {
            browserHistory.push(path);
        }
    };

    handleRemoveClick = () => {
        this.props.dispatch(deleteRanking(this.props.id));
    }

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
            <div style={styles}>
                <h4 style={{
                    display: "inline-block",
                    padding:8,
                    background: "#EEEEEE",
                    margin:0,
                    marginRight:16,
                    borderRadius: 4,
                }}>{this.props.ranking}</h4>
                <h4 style={{color: "#9E9E9E", display: "inline-block"}}><a onClick={this.routeToView("/app/jobs/single/?id=" + this.props.id)}>{this.props.name}</a></h4>
                <Button onClick={this.handleRemoveClick.bind(this)} className="right-align invisible-button" style={{padding:8}} >
                <Glyphicon glyph="remove"/>
                </Button>
            </div>
        );
    }
}