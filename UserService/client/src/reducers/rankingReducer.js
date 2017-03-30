export default function reducer(state={
    topJobs: {1:null,2:null,3:null,4: null ,5: null},
    jobsRanked: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "DELETE_RANKING": {
        var load = action.payload;
        let newState = Object.assign({}, state);

        var object = newState.topJobs

        // remove it from object
        for (var rank in object) {
            if (object.hasOwnProperty(rank) && object[rank] != null) {
              if(object[rank].id === load.id){
                  newState = {...newState,
                            topJobs:
                              {...newState.topJobs,
                                [rank]: null}}
                  break;
              }
            }
        }
        
        var max = 0;
        for (var rank in object) {
            if (object.hasOwnProperty(rank)) {
                if(object[rank] != null && rank > max) max=rank;
            }
        }  

        //remove gap
        var temp1 = {1:null,2:null,3:null,4: null ,5: null};
        for (var rank in object) {
            if (object.hasOwnProperty(rank) && rank<max && object[rank] == null) {
              //this is a gap, all after this rank need to be moved up
              var i;
              for(i = 1; i <= 5; i++ ){
                if(i > rank ){
                  temp1[i-1] = object[i]
                }
                else{
                  temp1[i] = object[i]
                }
              }
              newState.topJobs = Object.assign({}, temp1);
              break;
            }
        }
        
        return newState

      }
      case "SET_RANKING": {
        var load = action.payload;
        let newState = Object.assign({}, state);
        var topJobs = newState.topJobs;
        // check if the course is in the rankings already
        var ranked = 0;
        object = newState.topJobs
        for (var rank in object) {
            if (object.hasOwnProperty(rank) && object[rank] != null) {
              if(object[rank].id === load.id){
                // useless ranking
                if (load.ranking === parseInt(rank)){
                  return state
                }
                else{
                  ranked = rank;
                  newState = {...newState,
                            topJobs:
                              {...newState.topJobs,
                                [rank]: null}}
                  break;
                }
              }
            }
        }
        
        var newRanking =
        {course_name: load.course_name,
          id: load.id
        };

        // if its ranked already, the ones above it get new spot above it
        // downgrade needs to be treated differently
        if(ranked && ranked < load.ranking){
          console.log("downgrade");
          var object = newState.topJobs
          var temp1 = {};
          var temp2 = {};
          for(var rank in object){
            if(object.hasOwnProperty(rank)){
              if(parseInt(rank) >= ranked && parseInt(rank) < load.ranking){
                temp1[rank] = object[parseInt(rank) + 1]
              }
              else if(parseInt(rank) === load.ranking){
                temp1[rank] = newRanking
              }
              else{
                temp2[rank] = object[rank]
              }
            }
          }

          newState.topJobs = Object.assign({}, temp2, temp1);

          return newState;

        }
        else{
          // if there is no job in rank, set it
          if(topJobs.hasOwnProperty(load.ranking) && topJobs[load.ranking] == null){
            return {...newState,
              jobsRanked: true,
              topJobs:
              {...newState.topJobs,
                [load.ranking]: newRanking}}
          }

          // else move the others around
          else{
            //iterate through and if it has ranking >= then move down
            var object = newState.topJobs
            var temp1 = {};
            var temp2 = {};
            for (rank in object) {
                if (object.hasOwnProperty(rank)) {
                  if(object[rank == null]){
                    temp2[rank] = null;
                  }else{
                    if(rank >= load.ranking && rank < 5){
                      //gotta move it
                      temp1[parseInt(rank)+1] = object[rank];
                    }
                    else{
                      temp2[rank] = object[rank];
                    }
                  }
                }
            }

            temp2[load.ranking] = newRanking;
            newState.topJobs = Object.assign({}, temp2, temp1);

            var max = 0;
            var object = newState.topJobs;
            for (var rank in object) {
                if (object.hasOwnProperty(rank)) {
                    if(object[rank] != null && rank > max) max=rank;
                }
            }  

            // remove gaps
            var object = newState.topJobs;
            var temp1 = {1:null,2:null,3:null,4: null ,5: null};
            for (rank in object) {
                if (object.hasOwnProperty(rank) && rank<max && object[rank] == null) {
                  //this is a gap, all after this rank need to be moved up
                  var i;
                  for(i = 1; i <= 5; i++ ){
                    if(i > rank ){
                      temp1[i-1] = object[i]
                    }
                    else{
                      temp1[i] = object[i]
                    }
                  }
                  newState.topJobs = Object.assign({}, temp1);
                  break;
                }
            }
            
            return newState
          }
        }
      }
      default:
        return state
    }
}