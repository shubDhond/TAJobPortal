import React from "react";
import {connect} from "react-redux";
import {Header,Button, Col, Form, FormControl, Row} from "react-bootstrap";
import {setHeading} from "../../actions/headingsActions"
import { submitProfile } from "../../actions/applicantsActions";
import every from "lodash/every"

@connect((store) => {

    return {
        user: store.user
    };
})


export default class Profile extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            courses:"",
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
            tacourses:"",
            workstatus:"",
            workstatusexplain:"",
            studentstatus:"",
            studentstatusexplain:"",
            year:"",
        }
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
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    submitProfile(){
        var inputDate = new Date().toISOString()

        this.setState({
            dateofapplication:inputDate
        })

        console.log(inputDate)

        var result = every(this.state, (attr)=>{
            return attr != ""
        })

        if(!result){
            alert("All fields are required.")
            return
        }
    }







    render() {
        return (
            <div>


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

                    {/*<Row>*/}
                        {/*<Col xs={12} >*/}
                            {/*<FormControl type="text" pattern="[0-9]" placeholder="Something else"/>*/}
                        {/*</Col>*/}
                    {/*</Row>*/}

                    <Row>
                        <Col xs={12} >
                            <FormControl value={this.state.courses} onChange={this.handleInputChange.bind(this)} name="courses" type="text" placeholder="Courses taken"/>
                            <FormControl value={this.state.emailaddress} onChange={this.handleInputChange.bind(this)} name="emailaddress" type="text" placeholder="Email"/>
                            <FormControl value={this.state.phonenumber} onChange={this.handleInputChange.bind(this)} name="phonenumber" type="text" placeholder="Phone number"/>
                            <FormControl value={this.state.program} onChange={this.handleInputChange.bind(this)} name="program" type="text" placeholder="Program"/>
                            <FormControl value={this.state.studentdepartment} onChange={this.handleInputChange.bind(this)} name="studentdepartment" type="text" placeholder="Student Department"/>
                            <FormControl value={this.state.studentdepartmentexplain} onChange={this.handleInputChange.bind(this)} name="studentdepartmentexplain" type="text" placeholder="Student Department Explain"/>
                            <FormControl value={this.state.tacourses} onChange={this.handleInputChange.bind(this)} name="tacourses" type="text" placeholder="Ta Courses"/>
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
