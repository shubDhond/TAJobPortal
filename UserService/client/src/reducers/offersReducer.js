export default function reducer(state={
  offer: {},
  offers: {},
  sending: false,
  sent: false,
  error: null
}, action) {
  switch (action.payload) {
    case 'SEND_OFFER_PENDING': {
      return {
        ...state,
        sending: true,
        sent: false,
        error: null
      };
    }
    case 'SEND_OFFER_REJECTED': {
      return {
        ...state,
        sending: false,
        sent: false,
        error: action.payload.response.data.message
      }
    }
    case 'SEND_OFFER_FULLFILLED': {
      return {
        ...state,
        assignment: action.payload.data[0],
        sending: false,
        sent: true,
        error: null
      }
    }
  }
}
