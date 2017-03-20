import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {PanelGroup, Panel, Accordion, Well, Image, Button} from 'react-bootstrap';

class PanelHeader extends Component{
	render(){
		return (
			<div>
				<Image width="80" height="80" src="https://react-bootstrap.github.io/assets/thumbnail.png" circle />
				{this.props.first_name} {this.props.last_name}, {this.props.student_id}
			</div>
		);
	}
}

class AboutMe extends Component{
	render(){
		return (
			<div>
				About me: <Well>{this.props.content}</Well>
			</div>
		);
	}
}

class Courses extends Component{
	getCourses(){
		return this.props.courses.map((course) => {
			return (
				<Button type="submit" >{course}</Button>
			);
		});
	}

	render(){
		return (
			<div>
				Prefered Courses: 
				<Well>{this.getCourses()}</Well>
			</div>
		);
	}
}

class ApplicantList extends Component{
	constructor(){
	    super();
	    this.state = {
	      search: 'level'
    	};
	}

	getApplicants(){
		return this.props.applicants.map((applicant) => {
			return (
				<Panel header=
					{<div>
						<PanelHeader first_name={applicant.first_name} last_name={applicant.last_name} student_id={applicant.student_id} profile_pic={applicant.profile_pic}/>
					</div>} 
					eventKey={applicant.id}>
					{<div>
						<AboutMe content={applicant.details} />
						<Courses courses={applicant.courses}/>
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