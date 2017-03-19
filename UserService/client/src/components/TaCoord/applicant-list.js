import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {PanelGroup, Panel, Accordion, Well, Image} from 'react-bootstrap';

class PanelHeader extends Component{
	render(){
		return (
			<div>
				Name: {this.props.name}
				Student Number: {this.props.student_number}
        	</div>
		);
	}
}

class PanelContent extends Component{
	render(){
		return (
			<div>
				<Well>{this.props.content}</Well>
        	</div>
		);
	}
}

class ApplicantList extends Component{

	getApplicants(){
		return this.props.applicants.map((applicant) => {
			return (
				<Panel header={applicant.first_name} eventKey={applicant.id}>{<PanelContent content={applicant.details}/>}</Panel>
			);
		});
	}
	

	render(){
		return (
			<div>
				<Accordion>
					{this.getApplicants()}
				</Accordion>
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