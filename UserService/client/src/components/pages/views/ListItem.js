/**
 * Created by david on 2017-03-14.
 *
 * Might be used for later. Extended now just in case.
 */
import React from "react";
import {Panel} from "react-bootstrap"
export default class Listing extends React.Component {
    render() {
        const style={}
        return (
            <Panel  style={style}>
                {this.props.children}
            </Panel>
        );
    }
}