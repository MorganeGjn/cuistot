// reducers.js
import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT
} from "./constants";

const initialState = {
  requesting: false,
  logined: localStorage.getItem("user") ? true : false,
  messages: [],
  errors: []
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUESTING:
      return {
        requesting: true,
        logined: false,
        messages: [{ body: "Logging in...", time: new Date() }],
        errors: []
      };
    case LOGIN_SUCCESS:
      return {
        errors: [],
        messages: [],
        requesting: false,
        logined: true
      };
    case LOGIN_ERROR:
      return {
        errors: {
          body: action.error.toString(),
          time: new Date()
        },
        messages: [],
        requesting: false,
        logined: false
      };
    case LOGOUT:
      return {
        error: [],
        message: [],
        requesting: false,
        logined: false
      };
    default:
      return state;
  }
}

export default loginReducer;
