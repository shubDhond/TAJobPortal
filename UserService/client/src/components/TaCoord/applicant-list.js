import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Table, ListGroup, ListGroupItem} from 'react-bootstrap';

import ReactExpandableListView from 'react-expandable-listview';
import './react-expandable-listview.css'

class ApplicantList extends Component{

	render(){
		const { applicants } = this.props
		return (
			<div>
				<ReactExpandableListView
			        data={applicants}
			        headerAttName="student_name"
			        itemsAttName="items"/>
        	</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		applicants: state.applicants
	}
}

export default connect(mapStateToProps)(ApplicantList);