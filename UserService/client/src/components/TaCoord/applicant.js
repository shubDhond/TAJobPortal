import React from "react";
import { Table, ListGroupItem, ListGroup } from 'react-bootstrap';



export default class Inbox extends React.Component {

  	render() {
  		function alertClicked() {
		  alert('You clicked the third ListGroupItem');
		}

    	return (
      	<div className="card">
        	<ListGroup>
			    <ListGroupItem href="#link1">Link 111</ListGroupItem>
			    <ListGroupItem href="#link2">Link 2</ListGroupItem>
			    <ListGroupItem onClick={alertClicked}>
			      Trigger an alert
			    </ListGroupItem>
			</ListGroup>
      	</div>
    	);
  	}
}