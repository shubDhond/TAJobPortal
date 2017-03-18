export default function reducer(state={
    course: {
      id: null,
    },
    error: null,
  }, action) {

    switch (action.type) {
      case "SET_COURSE": {
        return {...state, course: action.payload}
      }
      default:
        return state
    }
}