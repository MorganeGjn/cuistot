import { LOGIN_REQUESTING, LOGOUT, LOGIN_FACEBOOK } from "./constants";

export function loginRequest(email, password) {
  return {
    type: LOGIN_REQUESTING,
    email,
    password
  };
}

export function loginFacebook() {
  return {
    type: LOGIN_FACEBOOK
  };
}

export function logoutRequest() {
  return {
    type: LOGOUT
  };
}
