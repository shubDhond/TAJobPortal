export default function reducer(state={
    listings: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_LISTINGS": {
        return {...state, fetching: true}
      }
      case "FETCH_LISTINGS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_LISTINGS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          listings: action.payload,
        }
      }
      default:
        return state
    }
}