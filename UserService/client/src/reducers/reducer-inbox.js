const dummyInbox = [
    {
        posting_id: 1,
        course: "csc301",
        status: "Pending"
    },
    {
        posting_id: 2,
        course: "csc302",
        status: "Accepted"
    },
    {
        posting_id: 3,
        course: "csc303",
        status: "Rejected"
    }
]

export default function reducer(state={
    inbox: dummyInbox,
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case 'GET_INBOX_PENDING': {
            return {
                ...state,
                fetching: true,
                fetched: false
            };
        }
        case 'GET_INBOX_REJECTED': {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload.response.data.message
            };
        }
        case 'GET_INBOX_FULFILLED': {
            return {
                ...state,
                inbox: action.payload.data,
                fetched: true,
                fetching: false,
                error: null
            };
        }
        default: {
            return state;
        }
    }
}
