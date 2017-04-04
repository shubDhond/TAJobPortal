import React from "react";
import {connect} from "react-redux";
import {Header,Button, Col, Form, FormControl, FormGroup, Checkbox, Row} from "react-bootstrap";
import {setHeading} from "../../actions/headingsActions"
import { submitProfile } from "../../actions/applicantsActions";
import every from "lodash/every"
import { applicantClient } from "../../axiosClient";

@connect((store) => {

    return {
        user: store.user,
        application: store.application
    };
})


export default class Profile extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            courses:[],
            dateofapplication:null,
            emailaddress:"",
            familyname:"",
            givenname:"",
            id:this.props.user.user.id,
            phonenumber:"",
            program:"",
            studentdepartment:"",
            studentdepartmentexplain:"",
            studentnumber:"",
            tacourses:[],
            workstatus:"",
            workstatusexplain:"",
            studentstatus:"",
            studentstatusexplain:"",
            year:"",
        }

        this.baseState = this.state
    }

    componentWillMount = () => {
        var payload = {
                title: "Profile",
                caption: "Everything about you."
            }

        this.props.dispatch(setHeading(payload))
    }

    handleInputChange(event) {
        const target = event.target;
        let value = target.value;
        const name = target.name;

        if(name == "courses" || name == "tacourses"){
            value = value.split(",")
        }

        this.setState({
            [name]: value
        });
    }

    submitProfile(){
        var inputDate = new Date().toISOString()

        this.setState({
            dateofapplication:inputDate
        })

        var result = every(this.state, (attr)=>{
            return attr != ""
        })

        if(!result){
            alert("All fields are required.")
            return
        }

        let courses = this.state.courses
        if(this.state.courses[this.state.courses.length - 1] == ""){
            courses = this.state.tacourses.pop()
        }

        let dateofapplication = this.state.dateofapplication
        let emailaddress = this.state.emailaddress
        let familyname = this.state.familyname
        let givenname = this.state.givenname
        let id = this.props.user.user.id
        let phonenumber = this.state.phonenumber
        let program = this.state.program
        let studentdepartment = this.state.studentdepartment
        let studentdepartmentexplain = this.state.studentdepartmentexplain
        let studentnumber = this.state.studentnumber

        let tacourses = this.state.tacourses
        if(this.state.tacourses[this.state.tacourses.length - 1] == ""){
            tacourses = this.state.tacourses.pop()
        }

        let workstatus = this.state.workstatus
        let workstatusexplain = this.state.workstatusexplain
        let studentstatus = this.state.studentstatus
        let studentstatusexplain = this.state.studentstatusexplain
        let year = this.state.year

        let app = {
            user_id: id,
            student_number: studentnumber,
            first_name: givenname,
            last_name: familyname,
            phone_number: phonenumber,
            email: emailaddress,
            program: program,
            year_of_study: year,
            department: studentdepartment,
            department_explain: studentdepartmentexplain,
            work_status: workstatus,
            work_status_explain: workstatusexplain,
            student_status: studentstatus,
            student_status_explain: studentstatusexplain,
            course_taken:courses,
            previous_assignments: tacourses,
        }

        let data = {
            user_id: id,
            application: app
        }

        var config = {
            headers: {'x-access-token': this.props.user.user.user_token}
        };
        this.props.dispatch(submitProfile(
            applicantClient.post("/application", data, config)
        ));
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.application.submitted){
            this.setState(this.baseState)
        }
    }

    render() {
        let message = null
        if(this.props.application.submitted){
            message = <h2>Profile Submitted</h2>
        }
        else if(this.props.application.error){
            message = <h2>Error. Try Again Later.</h2>
        }

        return (
            <div>
                {message}
                <Form horizontal className="card">
                    <Row>
                        <Col xs={4} >
                            <h6> FIRST NAME</h6>
                        </Col>
                        <Col xs={4}>
                            <h6>LAST NAME</h6>
                        </Col>
                        <Col xs={4} >
                            <h6>STUDENT NUMBER</h6>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={4} >
                            <FormControl value={this.state.givenname} onChange={this.handleInputChange.bind(this)} name="givenname" type="text" placeholder="First Name"/>
                        </Col>
                        <Col xs={4}>
                            <FormControl value={this.state.familyname} onChange={this.handleInputChange.bind(this)} name="familyname" type="text" placeholder="Last Name"/>
                        </Col>
                        <Col xs={4} >
                            <FormControl value={this.state.studentnumber} onChange={this.handleInputChange.bind(this)} name="studentnumber" type="number" pattern="[0-9]" placeholder="Student Number"/>
                        </Col>
                    </Row>

                    <br />

                    <Row>
                        <Col xs={12} >
                            <FormControl value={this.state.courses} onChange={this.handleInputChange.bind(this)} name="courses" type="text" placeholder="Courses taken (comma separated)"/>
                            <FormControl value={this.state.emailaddress} onChange={this.handleInputChange.bind(this)} name="emailaddress" type="text" placeholder="Email"/>
                            <FormControl value={this.state.phonenumber} onChange={this.handleInputChange.bind(this)} name="phonenumber" type="text" placeholder="Phone number"/>
                            <h6>Program</h6>
                            <FormGroup>
                                <Checkbox value="UG" checked={this.state.program === 'UG'} onChange={this.handleInputChange.bind(this)} name="program" inline>
                                    UG
                                </Checkbox>
                                {' '}
                                <Checkbox value="MSC" checked={this.state.program === 'MSC'} onChange={this.handleInputChange.bind(this)} name="program" inline>
                                    MSC
                                </Checkbox>
                                {' '}
                                <Checkbox value="MSAC" checked={this.state.program === 'MSAC'} onChange={this.handleInputChange.bind(this)} name="program" inline>
                                    MSAC
                                </Checkbox>
                                {' '}
                                <Checkbox value="PHD" checked={this.state.program === 'PHD'} onChange={this.handleInputChange.bind(this)} name="program" inline>
                                    PHD
                                </Checkbox>
                            </FormGroup>
                            <FormControl value={this.state.studentdepartment} onChange={this.handleInputChange.bind(this)} name="studentdepartment" type="text" placeholder="Student Department"/>
                            <FormControl value={this.state.studentdepartmentexplain} onChange={this.handleInputChange.bind(this)} name="studentdepartmentexplain" type="text" placeholder="Student Department Explain"/>
                            <FormControl value={this.state.tacourses} onChange={this.handleInputChange.bind(this)} name="tacourses" type="text" placeholder="Courses TA'd (comma separated)"/>
                            <FormControl value={this.state.workstatus} onChange={this.handleInputChange.bind(this)} name="workstatus" type="text" placeholder="Work Status"/>
                            <FormControl value={this.state.workstatusexplain} onChange={this.handleInputChange.bind(this)} name="workstatusexplain" type="text" placeholder="Work Status Explain"/>
                            <FormControl value={this.state.studentstatus} onChange={this.handleInputChange.bind(this)} name="studentstatus" type="text" placeholder="Student Status"/>
                            <FormControl value={this.state.studentstatusexplain} onChange={this.handleInputChange.bind(this)} name="studentstatusexplain" type="text" placeholder="Student Status Explain"/>
                            <FormControl value={this.state.year} onChange={this.handleInputChange.bind(this)} name="year" type="number" pattern="[0-9]" placeholder="Year"/>
                        </Col>
                    </Row>

                    <br />
                    <Row>
                        <Col xs={12} >
                            <Button onClick={this.submitProfile.bind(this)} className="right-align" bsStyle="primary" bsSize="large">Submit</Button>
                        </Col>
                    </Row>

                </Form>
            </div>


        );
    }
}
