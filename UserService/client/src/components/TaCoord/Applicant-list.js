/**
 * Created by shrey.mahendru on 2017-03-20.
 */
import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {PanelGroup, Panel, Accordion, Well, Glyphicon, Button} from 'react-bootstrap';

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
                <p>{this.props.content}</p>
            </div>
        );
    }
}
class Courses extends Component{
    getCourses(){
        return this.props.courses.map((course) => {
            return (
                <h5 style={{display:"inline",marginRight:16}} key={course} type="submit" ><a>{course}</a></h5>
            );
        });
    }

    render(){
        return (
            <div>
                {this.getCourses()}
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
                <Panel key={applicant.id} header=
                    {<div>
                        <PanelHeader first_name={applicant.first_name} last_name={applicant.last_name} student_id={applicant.student_id} profile_pic={applicant.profile_pic}/>
                    </div>}
                       footer={<div><Courses courses={applicant.courses}/></div>}
                       eventKey={applicant.id}  style={{marginBottom:15}}>
                    <div style={{padding:0}}>
                        <AboutMe content={applicant.details} />

                    </div>
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