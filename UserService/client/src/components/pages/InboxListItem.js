import React, {Component} from "react";
import {connect} from 'react-redux';
import {acceptOffer} from "../../actions/inboxActions"

@connect((store) => {

    return {
        inbox: store.inbox
    };
})

export default class InboxListItem extends Component{

    constructor(props){
        super(props)
    }

    componentWillReceiveProps(nextProps){
        // check for return from Inbox
    }

    acceptOffer(){
        // make API post to accept offer
    }

    render(){

        let acceptButton = null

        if(this.props.status.toLowerCase() == "accepted"){
            acceptButton=<a onClick={this.acceptOffer.bind(this)}>Accept Offer</a>
        }

        return (
            <tr key={this.props.key} >
                <td  style={{padding:12}}><a>{this.props.course_name}</a></td>
                <td  style={{padding:12}}>{this.props.status}{acceptButton}</td>
            </tr>
        )
    }
}
