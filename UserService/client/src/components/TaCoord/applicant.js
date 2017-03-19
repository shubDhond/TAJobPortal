import React from "react";

import SearchBar from "./SearchBar";
import ApplicantList from './applicant-list';

export default class Applicant extends React.Component {

  	render() {

    	return (
      	<div className="card">
      		<SearchBar />
        	<ApplicantList />
      	</div>
    	);
  	}
}