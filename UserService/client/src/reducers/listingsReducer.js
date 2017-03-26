export default function reducer(state={
    listings: {},
    listing: {
      course: {},
      fetching: false,
      fetched: false,
      error: null,
    },
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

      // Get one listing for single view.
      case 'FETCH_LISTING_PENDING': {
        return {
          ...state,
          listing: {
            ...state.listing,
            fetching: true,
            fetched: false,
          }
        }
      }
      case 'FETCH_LISTING_REJECTED': {
        return {
          ...state,
          listing: {
            ...state.listing,
            fetching: false,
            fetched: false,
            error: action.payload,
          }
        }
      }
      case 'FETCH_LISTING_FULFILLED': {
        var listing = action.payload.data;

        return {
          ...state,
          listing : {
            ...state.listing,
            course: {
              ...listing
            },
            fetching: false,
            fetched: true,
            error: null,
          }
        }
      }
      // Get all listings for Listings view
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
        var listings = action.payload.data;

        return {
          ...state,
          listings: {
            ...listings
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
