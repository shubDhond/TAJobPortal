import React from "react";

import ApplicantSearchBar from "./ApplicantSearchBar";
import ApplicantList from './Applicant-list';

export default class Applicant extends React.Component {

  	render() {

    	return (
      	<div className="card">
      		<ApplicantSearchBar />
        	<ApplicantList />
      	</div>
    	);
  	}
}