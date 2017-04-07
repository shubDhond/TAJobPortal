import React, {Component} from "react";
import {connect} from 'react-redux';
import { Table } from 'react-bootstrap';
import InboxListItem from "./InboxListItem"
import {fetchInbox} from "../../actions/inboxActions"

@connect((store) => {

    return {
        inbox: store.inbox
    };
})

export default class InboxList extends Component{

	componentWillMount(){
		// make API call here
	}

	componentWillReceiveProps(nextProps){
		// check for return from Inbox
	}

	constructor(props){
		super(props)

		this.state = {
			inbox: this.props.inbox.inbox
		}
	}

	getListItems(){
		return this.state.inbox.map((course, index) => {
			return (
				<InboxListItem key={index} course_name={course.course_name} status={course.status}/>
			);
		});
	}

	render(){
		return (
			<div>
				<Table striped condensed >
					<thead>
					    <tr>
						    <th style={{padding:12}}>Courses Applied</th>
						    <th style={{padding:12}}>Status</th>
					    </tr>
					</thead>
					<tbody >
						{this.getListItems()}
					</tbody>
				</Table>
			</div>
		);
	}
}
