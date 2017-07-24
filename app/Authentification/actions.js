import {
  LOGIN_REQUESTING,
  LOGOUT,
} from './constants'


export function loginRequest (email, password) {
  return {
    type: LOGIN_REQUESTING,
    email,password
  }
}

export function logoutRequest () {
  return {
    type: LOGOUT
    }
}
