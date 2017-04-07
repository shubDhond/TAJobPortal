import React, {Component} from "react";
import {connect} from 'react-redux';
import {acceptOffer} from "../../actions/inboxActions"
import {taCoordClient} from "../../axiosClient"

@connect((store) => {

    return {
        inbox: store.inbox,
        user: store.user
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
        var config = {
            headers: {'x-access-token': this.props.user.user.user_token}
        };
        let data ={
            status: "accepted"
        }
        this.props.dispatch(acceptOffer(
            taCoordClient.get("/offers/" + this.props.application_id, config)
        ));
    }
    rejectOffer(){
        // make API post to accept offer
        var config = {
            headers: {'x-access-token': this.props.user.user.user_token}
        };
        let data ={
            status: "rejected"
        }
        this.props.dispatch(acceptOffer(
            taCoordClient.get("/offers/" + this.props.application_id, config)
    ));
    }

    render(){

        let acceptButton = null
        let rejectButton = null

        if(this.props.status == "accepted"){
            acceptButton=<a onClick={this.acceptOffer.bind(this)}>Accept Offer</a>
            rejectButton=<a onClick={this.rejectOffer.bind(this)}>Reject Offer</a>
        }

        return (
            <tr key={this.props.key} >
                <td  style={{padding:12}}><a>{this.props.course_name}</a></td>
                <td  style={{padding:12}}>{this.props.status}{acceptButton}{rejectButton}</td>
            </tr>
        )
    }
}
