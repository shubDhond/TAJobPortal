export default function reducer(state={
  assignment: {},
  fetching: false,
  fetched: false,
  creating: false,
  created: true,
  error: null
}, action) {
  switch (action.type) {
    case 'CREATE_ASSIGNMENT_PENDING': {
      return {
        ...state,
        creating: true,
        created: false
      };
    }
    case 'CREATE_ASSIGNMENT_REJECTED': {
      return {
        ...state,
        creating: false,
        created: false,
        error: action.payload.response.data.message
      };
    }
    case 'CREATE_ASSIGNMENT_FULFILLED': {
      return {
        ...state,
        assignment: action.payload.data.assignment,
        created: true,
        creating: false,
        error: null
      };
    }
    default: {
      return state;
    }
  }
}