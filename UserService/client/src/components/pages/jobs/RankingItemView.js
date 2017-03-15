import React from "react";
import {connect} from "react-redux";
import {Button} from "react-bootstrap";
@connect((store) => {
    console.log(store);
    return {
        course: store.application.course
    };
})


export default class RankingItemView extends React.Component {


    render() {
        const {course} = this.props;

        return (
            //CONDITIONAL LOGIC TO DISPLAY EMPTY STATE OR POPULATED STATE
            <Populated/>
        );
    }
}
class Empty extends React.Component {
    render() {
        const styles = {
            border: "1px solid #bdbdbd",
            borderRadius: 4,
            background: "#f5f5f5",
            padding: 16,
            marginBottom: 15
        };
        return (
            <Button block style={styles}>
                <h4 style={{
                    display: "inline-block",
                    padding:8,
                    background: "#EEEEEE",
                    margin:0,
                    marginRight:16,
                    borderRadius: 4,
                }}>#1</h4>
                <h4 style={{color: "#9E9E9E", display: "inline-block"}}><a>CSC302</a></h4>
            </Button>
        );
    }
}
class Populated extends React.Component {
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
            <Button block style={styles}>
                <h4 style={{
                    display: "inline-block",
                    padding:8,
                    background: "#EEEEEE",
                    margin:0,
                    marginRight:16,
                    borderRadius: 4,
                }}>#1</h4>
                <h4 style={{color: "#9E9E9E", display: "inline-block"}}><a>CSC302</a></h4>
            </Button>
        );
    }
}