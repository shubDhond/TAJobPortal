import React from "react";
import { taCoordClient } from "../../axiosClient";
import { fetchListings } from "../../actions/listingsActions";
import {connect} from "react-redux";
import TaCoordJob from "./TaCoordJob";
import LazyLoad from 'react-lazy-load';
import {Accordion} from 'react-bootstrap';

@connect((store) => {
  return {
    listings : store.listings,
    user: store.user
  };
})

export default class TaCoordJobView extends React.Component {
  constructor(props) {
    super(props);
    const {listings} = this.props.listings;
    this.state = {
      title: this.props.title,
      description: this.props.description,
      deadline: this.props.deadline,
      status: this.props.status,
      showComponent: true
    };
  }

  componentWillMount(){
    if(!this.props.listings.fetched){
      var config = {
        headers: {'x-access-token': this.props.user.user.user_token}
      };
      this.props.dispatch(fetchListings(
        taCoordClient.get("/posting", config)
      ));
    }
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

        if (this.props.listings.listings){
            console.log("here")
            var courses = [];
            var object = this.props.listings.listings
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
                      <TaCoordJob showComponent={courses[course].showComponent} key={count} title={courses[course].course_name} status={courses[course].status} description={courses[course].requirements} deadline={courses[course].end_date}/>
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
