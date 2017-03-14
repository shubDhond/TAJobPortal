import React from "react";
import { Table } from 'react-bootstrap';

import InboxList from './inbox_list';


export default class Inbox extends React.Component {
  	render() {
    	return (
      	<div>
        	<h1>Inbox</h1>

        	 <InboxList />
      	</div>
    	);
  	}
}
