export default function reducer(state={
    course: {
      title: null,
      description: null,
      deadline: null,
    },
    applicant: {},
    submitting: false,
    submitted: false,
    fetched: false,
    fetching: true,
    error: null,
  }, action) {

    switch (action.type) {
      case "SET_COURSE": {
        return {...state, course: action.payload}
      }
        // Get one listing for single view.
        case 'SUBMIT_APPLICANT_PENDING': {
            return {
                ...state,
                submitting: true
            }
        }
        case 'SUBMIT_APPLICANT_REJECTED': {
            return {
                ...state,
                submitting: false,
                submitted: false,
                error: action.payload,
            }
        }
        case 'SUBMIT_APPLICANT_FULFILLED': {
            return {
                ...state,
                submitting: false,
                submitted: true,
                error: null,
            }
        }

        case 'FETCH_APPLICANT_PENDING': {
            return {
                ...state,
                fetching: true,
                fetched: false,
            }
        }
        case 'FETCH_APPLICANT_REJECTED': {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload,
            }
        }
        case 'FETCH_APPLICANT_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                applicant: action.payload.data,
                error: null,
            }
        }

      default:
        return state
    }
}
