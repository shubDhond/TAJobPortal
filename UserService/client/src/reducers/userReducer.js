export default function reducer(state={
  user: {},
  authenticating: false,
  authenticated: false,
  emailError: null,
  passwordError: null,
  accessKeyError: null,
  error: null,
  status: null
}, action) {
  switch (action.type) {
    case 'SET_USER_TYPE': {
      return {
        ...state,
        user: {
          ...state.user,
          user_type: action.payload
        },
        authenticating: false,
        authenticated: false,
        emailError: null,
        passwordError: null,
        accessKeyError: null,
        error: null,
        status: null
      }
    }
    case 'USER_EMAIL_ERROR': {
      return {
        ...state,
        emailError: action.payload,
        authenticating: false,
        authenticated: false,
        error: null,
        status: null
      }
    }
    case 'USER_EMAIL_VALID': {
      return {
        ...state,
        emailError: null,
        authenticating: false,
        authenticated: false,
        error: null,
        status: null
      }
    }
    case 'USER_PASSWORD_ERROR': {
      return {
        ...state,
        passwordError: action.payload,
        authenticating: false,
        authenticated: false,
        error: null,
        status: null
      }
    }
    case 'USER_PASSWORD_VALID': {
      return {
        ...state,
        passwordError: null,
        authenticating: false,
        authenticated: false,
        error: null,
        status: null
      }
    }
    case 'USER_ACCESS_KEY_ERROR': {
      return {
        ...state,
        accessKeyError: action.payload,
        authenticating: false,
        authenticated: false,
        error: null,
        status: null
      }
    }
    case 'USER_ACCESS_KEY_VALID': {
      return {
        ...state,
        accessKeyError: null,
        authenticating: false,
        authenticated: false,
        error: null,
        status: null
      }
    }
    case 'USER_AUTHENTICATE_PENDING': {
      return {
        ...state,
        authenticating: true,
        authenticated: false,
        emailError: null,
        passwordError: null,
        accessKeyError: null,
        status: null
      }
    }
    case 'USER_AUTHENTICATE_REJECTED': {
      return {
        ...state,
        authenticating: false,
        authenticated: false,
        emailError: null,
        passwordError: null,
        accessKeyError: null,
        error: action.payload.response.data.message,
        status: action.payload.response.status
      }
    }
    case 'USER_AUTHENTICATE_FULFILLED': {
      return {
        ...state,
        user: {
          ...action.payload.data.user
        },
        authenticating: false,
        authenticated: true,
        emailError: null,
        passwordError: null,
        accessKeyError: null,
        error: null,
        status: action.payload.status
      }
    }
    default: 
      return state;
  }
}