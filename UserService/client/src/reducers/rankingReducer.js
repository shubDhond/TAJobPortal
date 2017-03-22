export default function reducer(state={
    topJobs: {},
    jobsRanked: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "SET_RANKING": {
        var load = action.payload;
        let newState = Object.assign({}, state);
        var topJobs = newState.topJobs;
        // check if the course is in the rankings already
        var object = newState.topJobs
        for (var rank in object) {
            if (object.hasOwnProperty(rank)) {
              if(object[rank].title === load.title){
                delete object[rank]
              }
            }
        }

        var newRanking =
        {title: load.title,
          description: load.description,
          deadline: load.deadline,
          id: load.id
        };
        // if there is no job in rank, set it
        if(!topJobs.hasOwnProperty(load.ranking)){
          return {...newState,
            jobsRanked: true,
            topJobs:
            {...newState.topJobs,
              [load.ranking]: newRanking}}
        }
        // else move the others around
        else{
          //iterate through and if it has ranking >= then move down
          object = newState.topJobs
          var temp1 = {};
          var temp2 = {};
          for (rank in object) {
              if (object.hasOwnProperty(rank)) {
                if(rank >= load.ranking && rank < 5){
                  //gotta move it
                  temp1[parseInt(rank)+1] = object[rank];
                }
                else{
                  temp2[rank] = object[rank];
                }
              }
          }
          temp2[load.ranking] = newRanking;
          newState.topJobs = Object.assign({}, temp2, temp1);

          return newState
        }
      }
      default:
        return state
    }
}