import React, {Component} from "react";
import {connect} from "react-redux";
import {Accordion, Glyphicon, Panel} from "react-bootstrap";
import LazyLoad from "react-lazy-load";
import {applicantClient} from "../../axiosClient";
import {fetchApplicants} from "../../actions/applicantsActions";
import {Draggable} from "react-drag-and-drop";

class PanelHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let dragStyle = {
        };

        if (this.state.dragging) {
            dragStyle['background'] = '#F5F5F5';
            dragStyle['color'] = '#F5F5F5';
        }

        return (
            <div style={{padding: "16px", display: 'flex',alignItems:'center'}}>
                <Glyphicon glyph="user" style={{marginRight: 8}}/>

                <div style={{flexGrow:"1"}}>
                    {this.props.first_name} {this.props.last_name}, {this.props.student_id}
                </div>
                <Draggable type='applicant'
                           data={JSON.stringify({
                               student_id: this.props.user_id,
                               application_id: this.props.application_id
                           })}
                           style={Object.assign({
                               background:"#E0E0E0",
                               padding:"4px 8px",
                               borderRadius:4
                           },dragStyle)}
                           key={this.props.user_id}
                           onDrag={() => this.setState({...this.state, dragging: true})}
                           onDragEnd={() => this.setState({...this.state, dragging: false})}>
                    <p style={{
                        display:"inline-block",
                        margin:0}}>Drag to assign</p>
                    <Glyphicon glyph="arrow-right" style={{marginLeft: 8}}/>
                </Draggable>
            </div>
        );
    }
}

class AboutMe extends Component {

    render() {
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
class Courses extends Component {

    getCourses() {
        var courses = [this.props.courses][0][0];
        return Object.keys(courses).map((course) => {
            return (
                <h5 style={{display: "inline", marginRight: 16}} key={course} type="submit">
                    <a>{courses[course]}</a></h5>
            );
        });
    }

    render() {
        return (
            <div>
                Course Rank: {this.getCourses()}
            </div>
        );
    }
}

class ApplicantList extends Component {

    componentWillMount() {
        var config = {
            headers: {'x-access-token': this.props.user.user.user_token}
        };
        this.props.dispatch(fetchApplicants(
            applicantClient.get("/application", config)
        ));
    }

    constructor(props) {
        super(props);
        const {applicants} = this.props.applicants;

        this.state = {
            applicants: applicants
        }
    }

    componentWillReceiveProps(nextProps) {
        const {applicants} = nextProps;

        if (applicants.fetched) {
            this.setState({
                ...this.state,
                applicants: applicants.applicants
            });
        }

    }

    getApplicants() {
        //console.log(this.props.applicants.applicants);
        var obj = [this.props.applicants.applicants_copy][0];
        if (this.props.applicants.fetched) {

            return Object.keys(obj).map((applicant) => {
                return (

                    <Panel key={obj[applicant].user_id} header=
                        {<div>
                            <PanelHeader first_name={obj[applicant].first_name}
                                         last_name={obj[applicant].last_name}
                                         student_id={obj[applicant].student_number}
                                         profile_pic={obj[applicant].profile_pic}
                                         user_id={obj[applicant].user_id}
                                         application_id={obj[applicant].id}/>
                        </div>}
                           footer={<div><Courses courses={obj[applicant].courses}/></div>}
                           eventKey={obj[applicant].user_id} style={{marginBottom: 15}}>
                        <div style={{padding: 0}}>
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

        } else {
            return null

        }

    }


    render() {

        return (
            <div style={{padding: 15, overflow: 'auto'}} className="fullheight">
                <LazyLoad height={'100%'} offsetVertical={300}>
                    <Accordion>
                        {this.getApplicants()}
                    </Accordion>
                </LazyLoad>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        applicants: state.applicants,
        user: state.user
    }

}

export default connect(mapStateToProps)(ApplicantList);
