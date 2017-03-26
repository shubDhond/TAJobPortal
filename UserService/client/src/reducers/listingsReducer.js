export default function reducer(state={
    listings: {},
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "SET_LISTINGS": {
        return {
          ...state,
          listings: action.payload,
        }
      }
      case "SET_RANKING": {
        var course = action.payload;

        return {...state, listings:
          {...state.listings,
            [course.id]:
              {...state.listings[course.id],
                ranking: course.ranking}}}

      }
      case 'FETCH_LISTINGS_PENDING': {
        return {
          ...state,
          fetching: true,
          fetched: false,
        }
      }
      case 'FETCH_LISTINGS_REJECTED': {
        return {
          ...state,
          fetching: false,
          fetched: false,
          error: action.payload,
        }
      }
      case 'FETCH_LISTINGS_FULFILLED': {
        return {
          ...state,
          listings: {
            ...action.payload
          },
          fetching: false,
          fetched: true,
          error: null,
        }
      }
      default:
        return state
    }
}
