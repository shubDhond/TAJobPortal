import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import { Panel, Accordion, Glyphicon} from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { applicantClient } from "../../axiosClient";
import {fetchApplicants} from "../../actions/applicantsActions";
import { setSingleCourse, toggleComponent } from "../../actions/courseListingsActions";

class PanelHeader extends Component{
    render(){
        return (
            <div style={{padding:"16px 16px 8px 16px"}}>
                <Glyphicon glyph="user"  style={{marginRight:8}}/>
                {this.props.first_name} {this.props.last_name}, {this.props.student_id}
            </div>
        );
    }
}

class AboutMe extends Component{

    render(){
        return (
            <div >
                <h4>About me:</h4>
                <p>Phone Number: {this.props.phone_number}</p>
                <p>Email: {this.props.email}</p>
                <p>Program: {this.props.program}</p>
                <p>year_of_study: {this.props.year_of_study}</p>
                <p>department_explain: {this.props.department_explain}</p>
                <p>work_status: {this.props.work_status}</p>
                <p>work_status_explain: {this.props.work_status_explain}</p>
                <p>student_status: {this.props.student_status}</p>
                <p>student_status_explain: {this.props.student_status_explain}</p>
                <p>status: {this.props.status}</p>
                <p>previous_assignments: {this.props.previous_assignments}</p>
                <p>courses: {this.props.courses}</p>
            </div>
        );
    }
}
class Courses extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "123",
            description: "456",
            status: "789"
        };
        console.log(this.props)

        this.link_course = this.link_course.bind(this);
    }

    link_course(e) {
        e.preventDefault();
        this.props.dispatch(setSingleCourse(this.state.title, this.state.description, this.state.status));
        if(!this.props.show){
            this.props.dispatch(toggleComponent());
        }
    }

    getCourses(){
        var courses = [this.props.courses][0][0];
        return Object.keys(courses).map((course) => {
            return (
                <h5 style={{display:"inline",marginRight:16}} key={course} type="submit" ><a onClick={this.link_course}>{courses[course]}</a></h5>
            );
        });
    }

    render(){
        return (
            <div>
                Course Rank: {this.getCourses()}
            </div>
        );
    }
}

class ApplicantList extends Component{

    componentWillMount(){
        var config = {
            headers: {'x-access-token': this.props.user.user.user_token}
        };
        this.props.dispatch(fetchApplicants(
            applicantClient.get("/application", config)
        ));
    }

    constructor(props){
        super(props);
        const {applicants} = this.props.applicants;

        this.state = {
            applicants: applicants
        }
    }

    componentWillReceiveProps(nextProps){
        const { applicants } = nextProps;

        if(applicants.fetched){
            this.setState({...this.state,
                applicants: applicants.applicants
            });
        }

    }

    getApplicants(){
        //console.log(this.props.applicants.applicants);
        var obj = [this.props.applicants.applicants_copy][0];
        if (this.props.applicants.fetched){

            return Object.keys(obj).map((applicant) => {
                return (

                    <Panel key={obj[applicant].user_id} header=
                        {<div>
                            <PanelHeader first_name={obj[applicant].first_name} last_name={obj[applicant].last_name} student_id={obj[applicant].student_number} profile_pic={obj[applicant].profile_pic}/>
                        </div>}
                           footer={<div><Courses dispatch={this.props.dispatch} courses={obj[applicant].courses} show={this.props.courses.showComponent}/></div>}
                           eventKey={obj[applicant].user_id}  style={{marginBottom:15}}>
                        <div style={{padding:0}}>
                            <AboutMe
                                phone_number={obj[applicant].phone_number}
                                email={obj[applicant].email}
                                program={obj[applicant].program}
                                year_of_study={obj[applicant].year_of_study}
                                department_explain={obj[applicant].department_explain}
                                work_status={obj[applicant].work_status}
                                work_status_explain={obj[applicant].work_status_explain}
                                student_status={obj[applicant].student_status}
                                student_status_explain={obj[applicant].student_status_explain}
                                status={obj[applicant].status}
                                previous_assignments={obj[applicant].previous_assignments}
                                courses={obj[applicant].courses}
                            />

                        </div>
                    </Panel>
                );
            });

        }else {
            return null

        }

    }


    render(){

        return (
            <div style={{overflow: 'auto', maxHeight: 500}}>

                <div className="filler" />
                <LazyLoad height={762} offsetVertical={300}>
                    <Accordion>
                        {this.getApplicants()}
                    </Accordion>
                </LazyLoad>
                <div className="filler" />


            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        applicants: state.applicants,
        user: state.user,
        courses: state.courses
    }

}

// function matchDispatchToProps(dispatch) {
//     return bindActionCreators({
//         setSingleCourse: setSingleCourse,
//         toggleComponent: toggleComponent,
//         fetchApplicants: fetchApplicants
//
//     }, dispatch)
//
// }

export default connect(mapStateToProps)(ApplicantList);