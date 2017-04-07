import React from "react";
import { Button, ControlLabel, FormControl, FormGroup, Modal } from "react-bootstrap";
import RichTextEditor from 'react-rte';
import {taCoordClient} from "../../axiosClient"
import { connect } from "react-redux";
import {fetchCourses,postAd} from "../../actions/courseActions"

@connect((store) => {
    return {
      courses : store.courses,
      user: store.user
  };
})

export default class NewAd extends React.Component {

  componentWillMount(){

    const {courses} = this.props

    if(!courses.fetched){
      var config = {
        headers: {'x-access-token': this.props.user.user.user_token}
      };
      this.props.dispatch(fetchCourses(
        taCoordClient.get("/course", config)
      ));
    }
    else{
      let courseList = []

      for(var i =0; i < courses.courses.length; i++){
        courseList.push({
          course_name:courses.courses[i].course_code,
          course_id:courses.courses[i]._id
        })
      }

      this.setState({
        ...this.state,
        courses: courseList,
        form: {
          ...this.state.form,
          course: courseList.length ? courseList[0].course_id : ""
        }
      });
    }
  }

  constructor(props){
    super(props);
    this.state = {
      courses: [],
      form:{
        requirements: RichTextEditor.createEmptyValue(),
        start_date: "",
        end_date: "",
        tas_needed: "",
        course_id: ""
      }
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({...this.state,
      form:{...this.state.form,
        requirements: value
      }});
  }


  handleInputChange(event) {
      const target = event.target;
      let value = target.value;
      const name = target.name;
      console.log(name, value)
      this.setState({
        ...this.state,
        form:{...this.state.form,
            [name]: value
        }
      });
  }

  componentWillReceiveProps(nextProps){

    const {courses} = nextProps;

    if(courses.fetched){
      let courseList = []
      for(var i =0; i < courses.courses.length; i++){
        courseList.push({
          course_name:courses.courses[i].course_code,
          course_id:courses.courses[i]._id
        })
      }

      this.setState({
        ...this.state,
        courses: courseList
      })
    }

  }

  sendPost(){

    let editorVal = this.state.form.requirements.toString("html")

    // fill in data for post here
    if (this.state.form.course_id && this.state.form.start_date && 
    this.state.form.end_date && this.state.form.tas_needed && this.state.form.tas_needed > 0) {
      let data ={
        course_id: this.state.form.course_id,
        requirements: editorVal,
        start_date: this.state.form.start_date,
        end_date: this.state.form.end_date,
        tas_needed: this.state.form.tas_needed
      };

      var config = {
        headers: {'x-access-token': this.props.user.user.user_token}
      };
      this.props.dispatch(postAd(
        taCoordClient.post("/posting", data, config)
      ));
    } else {
      this.setState({
        ...this.state,
        error: 'Please enter course name, start date, end date, and TAs needed.'
      });
    }
  }

  render() {
    let courseList = []
    const {courses} = this.state
    for(var i =0; i < courses.length; i++){
      courseList.push(<option key={i} value={courses[i].course_id}>
        {courses[i].course_name}
        </option>
      )
    }
    return (
        <Modal.Header closeButton>
          <Modal.Title>
            New Ad
          </Modal.Title>
          <Modal.Body>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Course Name</ControlLabel>
              <FormControl componentClass="select" value={this.state.course_id}  onChange={this.handleInputChange.bind(this)} name="course_id" placeholder="Course Code">
                {courseList}
              </FormControl>
            </FormGroup>
            <FormControl value={this.state.form.start_date} onChange={this.handleInputChange.bind(this)} name="start_date" type="date" placeholder="Start Date" />
            <FormControl value={this.state.form.end_date} onChange={this.handleInputChange.bind(this)} name="end_date" type="date" placeholder="End Date" />
            <FormControl value={this.state.form.tas_needed} onChange={this.handleInputChange.bind(this)} name="tas_needed" type="text" placeholder="TAs Needed" />
            <RichTextEditor value={this.state.form.requirements} onChange={this.onChange}/>

            <Button onClick={this.sendPost.bind(this)}>Submit</Button>
            <p style={{color: 'red'}}>{this.state.error}</p>
          </Modal.Body>
        </Modal.Header>
    );

  }
}
