import React from "react";
import { setCourses } from "../../actions/courseListingsActions";
import {connect} from "react-redux";
import TaCoordJob from "./TaCoordJob";
import LazyLoad from 'react-lazy-load';
import {Accordion} from 'react-bootstrap';

@connect((store) => {
  return {
    courses : store.courses,
  };
})

export default class TaCoordJobView extends React.Component {
  constructor(props) {
    super(props);
    const {courses} = this.props.courses;
    this.state = {
      courses: courses,
      title: this.props.title,
      description: this.props.description,
      deadline: this.props.deadline,
      status: this.props.status,
      showComponent: true
    };
  }

  componentWillMount(){
    this.props.dispatch(setCourses())
  }

  buttonClick() {
    if (this.state.showComponent) {
      this.setState({
        showComponent: false
      });
    } else {
      this.setState({
        showComponent: true
      });
    }
  }

    getCourses(){



        if (this.props.courses.courses){
            console.log("here")
            var courses = [];
            var object = this.props.courses.courses
            var count = 0;

            for (var id in object) {
                if (object.hasOwnProperty(id)) {
                    var course = object[id];
                    courses.push(course)
                }
            }
            console.log(courses)

            return Object.keys(courses).map((course) => {
                console.log(count)
                count++
                return (
                    <div>
                      <TaCoordJob showComponent={courses[course].showComponent} id={count} key={count} title={courses[course].title} status={courses[course].status} description={courses[course].description} deadline={courses[course].deadline}/>
                    </div>
                );
            });

        }else {
            return null

        }

    }

  render() {



    return (

        <div style={{overflow: 'auto', maxHeight: 500}}>

          <div className="filler" />
          <LazyLoad height={762} offsetVertical={300}>
            <Accordion>
                {this.getCourses()}
            </Accordion>
          </LazyLoad>
          <div className="filler" />


        </div>

    );
  }
}
