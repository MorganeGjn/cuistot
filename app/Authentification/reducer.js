// reducers.js
import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT
} from './constants'

const initialState = {
  requesting: false,
  successful: localStorage.getItem('token') ? true : false,
  messages: [],
  errors: [],
}

function loginReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUESTING:
      return {
        requesting: true,
        successful: false,
        messages: [{ body: 'Logging in...', time: new Date() }],
        errors: [],
      }
    case LOGIN_SUCCESS:
      return {
        errors: [],
        messages: [],
        requesting: false,
        successful: true,
      }
    case LOGIN_ERROR:
      return {
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        messages: [],
        requesting: false,
        successful: false,
      }
    case LOGOUT:
      return {
        error:[],
        message:[],
        requesting: false,
        successful: false,
      }
    default:
      return state
  }
}

export default loginReducer;
