import React from "react";

import Listing from "./Listing";
import SearchBar from "./SearchBar";
import { Accordion,Panel } from "react-bootstrap";

  var jobs = [
     {title: "CSC301", 
  description: "This course is an introduction to the theory and practice of large-scale software system design, development, and deployment. Topics include project management; advanced UML; reverse engineering; requirements inspection; verification and validation software architecture; performance modeling and analysis.", 
  deadline: "2017-04-23"},
  {title: "CSC302", 
  description: "This course is an introduction to the theory and practice of large-scale software system design, development, and deployment. Topics include project management; advanced UML; reverse engineering; requirements inspection; verification and validation software architecture; performance modeling and analysis.", 
  deadline: "2017-04-23"},
   {title: "CSC303", 
  description: "This course is an introduction to the theory and practice of large-scale software system design, development, and deployment. Topics include project management; advanced UML; reverse engineering; requirements inspection; verification and validation software architecture; performance modeling and analysis.", 
  deadline: "2017-04-23"}];

export default class Jobs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listings: jobs
    }
  }

  render() {
    return (
      <div>
        <h1>Jobs</h1>
        <SearchBar />
        {
          this.state.listings.map(function(listing){
            return <Listing title={listing.title} description={listing.description} 
            deadline={listing.deadline}/>
          })
        }
      </div>
    );
  }
}
