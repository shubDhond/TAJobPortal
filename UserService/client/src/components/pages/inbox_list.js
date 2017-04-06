import React, {Component} from "react";
import {connect} from 'react-redux';
import { Table } from 'react-bootstrap';

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

		return this.state.inbox.map((course) => {
			return (
				<tr key={course.posting_id} >
					<td  style={{padding:12}}><a>{course.course}</a></td>
			        <td  style={{padding:12}}>{course.status}</td>
		        </tr>
			);
		});
	}

	render(){
		return (
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
		);
	}
}
