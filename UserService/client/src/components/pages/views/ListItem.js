/**
 * Created by david on 2017-03-14.
 */
import React from "react";
import {Panel} from "react-bootstrap"
export default class Listing extends React.Component {
    constructor(){
        super();
    }

    render() {
        const style={}
        return (
            <Panel  style={style} header={this.props.header}>
                {this.props.children}
            </Panel>
        );
    }
}