import React from "react";

import SearchBar from "./SearchBar";
import ApplicantList from './Applicant-list';
import {Col} from 'react-bootstrap'

export default class Applicant extends React.Component {

  	render() {

    	return (
      	<Col xs={12} style={{padRight:14,borderRight:"1px solid #E0E0E0"}}>
            <h3>Applicants</h3>
      		<SearchBar />
        	<ApplicantList />
      	</Col>
    	);
  	}
}