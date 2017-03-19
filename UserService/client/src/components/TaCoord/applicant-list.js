import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {PanelGroup, Panel, Accordion, Well, Image} from 'react-bootstrap';

class PanelHeader extends Component{
	render(){
		return (
			<div>
				<Image width="80" height="80" src="https://react-bootstrap.github.io/assets/thumbnail.png" circle />
				{this.props.name}, {this.props.student_id}
			</div>
		);
	}
}

class PanelContent extends Component{
	render(){
		return (
			<div>
				About me: <Well>{this.props.content}</Well>
				Prefered Courses: <Well>{this.props.courses}</Well>
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
						<PanelHeader name={applicant.first_name} student_id={applicant.student_id} profile_pic={applicant.profile_pic}/>
					</div>} 
					eventKey={applicant.id}>
					{<div>
						<PanelContent content={applicant.details} courses={applicant.courses}/>
					</div>}
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