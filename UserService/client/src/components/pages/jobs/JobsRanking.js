import React from "react";
import { connect } from "react-redux";
// import {Glyphicon} from "react-bootstrap";
import RankingItemView from "./RankingItemView";

@connect((store) => {
    return {
        rankings: store.rankings
    };
})

export default class JobsRanking extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      topJobs: this.props.rankings.topJobs
    }
  }

  render() {
    const {topJobs} = this.props.rankings;
    var items = [];
    for(let i = 1; i<= 5; i++){
      if(topJobs.hasOwnProperty(i)){
        items.push(<RankingItemView title={topJobs[i].title} key={i} id={topJobs[i].id} ranking={i}/>);
      }

      else{
        items.push(<RankingItemView key={i} ranking={null}/>);
      }
    }

    return (
      <div>
        <h3 style={{marginBottom:15}}>Preference Rankings</h3>
        {items}
      </div>
    );
  }
}
