export default function reducer(state={
    courses: [],
    showComponent: false,
    fetching: false,
    fetched: false,
    error: null,
    title: null,
    description: null,
    status: null,
  }, action) {

    switch (action.type) {
      case "SET_COURSES": {
        return {
          ...state,
          courses: action.payload,
        }
      }
      case "TOGGLE_COMPONENT": {
        if (state.showComponent) {
          return{
            ...state,
            showComponent : false
          }
        } else {
          return{
            ...state,
            showComponent : true
          }
        }
      }
      case "SET_SINGLE_COURSE": {
        return {
          ...state,
          title: action.title,
          description: action.description,
          status: action.status
        }
      }
      case 'FETCH_COURSES_PENDING': {
        return {
          ...state,
          fetching: true,
          fetched: false,
        }
      }
      case 'FETCH_COURSES_REJECTED': {
        return {
          ...state,
          fetching: false,
          fetched: false,
          error: action.payload,
        }
      }
      case 'FETCH_COURSES_FULFILLED': {
        var data = action.payload.data;
        var courses={};

        for(let i = 0 ; i < data.length ; i++){
          var id = data[i]._id;
          var course_id = data[i].course_id;
          var reqs = data[i].requirements;
          var start_date = data[i].start_date;
          var end_date = data[i].end_date;
          var course_name = "placeholder " + id.slice(-2);
          var description = "placeholder";

          var obj = {
            course_name : course_name,
            description: description,
            ranking: null,
            course_id: course_id,
            requirements: reqs,
            start_date: start_date,
            end_date: end_date
          };

          courses[id] = obj;
        }
      }
      default:
        return state
    }
}
