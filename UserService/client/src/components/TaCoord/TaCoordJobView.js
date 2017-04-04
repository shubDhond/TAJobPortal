import React from "react";
import { taCoordClient } from "../../axiosClient";
import { fetchListings } from "../../actions/listingsActions";
import {connect} from "react-redux";
import TaCoordJob from "./TaCoordJob";

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

  render() {
    var courses = [];
    var object = this.props.listings.listings
    var count = 0;

    for (var id in object) {
      if (object.hasOwnProperty(id)) {
        var course = object[id];
        courses.push(<TaCoordJob showComponent={course.showComponent} title={course.course_name} status={course.status} id={id} key={count++} description={course.requirements} deadline={course.end_date}/>)
      }
    }
    return (
      <div>
        {courses}
      </div>
    );
  }
}
