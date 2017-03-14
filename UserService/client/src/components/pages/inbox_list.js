import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Table } from 'react-bootstrap';

class InboxList extends Component{

	getListItems(){
		return this.props.inbox.map((course) => {
			return (
				<tr key={course.posting_id}>
					<td>{course.course}</td>
			        <td>{course.status}</td>
		        </tr>
			);
		});
	}

	render(){
		return (
			<Table>
				<thead>
				 	<tr>
					   	<th>Courses Applied</th>
					    <th>Status</th>
				  	</tr>
				</thead>
				<tbody>
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