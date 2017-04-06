import React, {Component} from "react";
import {connect} from 'react-redux';

@connect((store) => {

    return {
        inbox: store.inbox
    };
})

export default class InboxListItem extends Component{

    constructor(props){
        super(props)
    }

    componentWillMount(){
        // make API call here
    }

    componentWillReceiveProps(nextProps){
        // check for return from Inbox
    }

    render(){
        return (
            <tr key={this.props.key} >
                <td  style={{padding:12}}><a>{this.props.course_name}</a></td>
                <td  style={{padding:12}}>{this.props.status}</td>
            </tr>
        )
    }
}
