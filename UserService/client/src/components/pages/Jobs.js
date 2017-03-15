import React from "react";
import SearchBar from "./SearchBar";


export default class Jobs extends React.Component {
  render() {

    return (
      <div>
        <SearchBar  />
        {this.props.children}
      </div>
    );
  }
}
