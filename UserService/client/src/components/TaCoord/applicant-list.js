import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {PanelGroup, Panel, Accordion, Well, Image} from 'react-bootstrap';

class PanelHeader extends Component{
	render(){
		return (
			<div>{this.props.name}, {this.props.student_id}</div>
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
				<Panel header=
					{<div>
						{applicant.first_name}, {applicant.student_id}
					</div>} 
					eventKey={applicant.id}>

					{<PanelContent content={applicant.details} />}


				</Panel>
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