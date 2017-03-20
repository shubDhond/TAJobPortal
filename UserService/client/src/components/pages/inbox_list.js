import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Table } from 'react-bootstrap';

class InboxList extends Component{

	getListItems(){
		return this.props.inbox.map((course) => {
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

function mapStateToProps(state) {
	return {
		inbox: state.inbox
	}
}

export default connect(mapStateToProps)(InboxList);