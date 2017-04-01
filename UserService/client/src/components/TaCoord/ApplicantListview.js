import React, {Component} from "react";
import {connect} from 'react-redux';
import { Panel, Accordion, Glyphicon} from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { applicantClient } from "../../axiosClient";
import {fetchApplicants} from "../../actions/applicantsActions";

class PanelHeader extends Component{
    render(){
        console.log(this.props.last_name);
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
        console.log(this.props.content);
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
        console.log(this.props.courses);
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

    componentWillMount(){
        this.props.dispatch(fetchApplicants(
            applicantClient.get("/application")
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
        var obj = [this.props.applicants.applicants][0];
        console.log(obj);


        if (this.props.applicants.fetched){

            return Object.keys(obj).map((applicant) => {
                console.log(obj[applicant]);
                return (

                    <Panel key={obj[applicant].user_id} header=
                        {<div>
                            <PanelHeader first_name={obj[applicant].first_name} last_name={obj[applicant].last_name} student_id={obj[applicant].student_number} profile_pic={obj[applicant].profile_pic}/>
                        </div>}
                           footer={<div><Courses courses={obj[applicant].courses}/></div>}
                           eventKey={obj[applicant].user_id}  style={{marginBottom:15}}>
                        <div style={{padding:0}}>
                            <AboutMe content={obj[applicant].details} />

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
        applicants: state.applicants
    }

}

export default connect(mapStateToProps)(ApplicantList);