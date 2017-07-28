import { take, fork, cancel, call, put, cancelled } from "redux-saga/effects";

import { push } from "react-router-redux";

// Our login constants
import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  LOGIN_FACEBOOK
} from "./constants";

const loginUrlLocal = `http://localhost:3000/login`;
const loginUrlFacebook = `http://localhost:3000/login/facebook`;

function loginApi(email, password) {
  return fetch(loginUrlLocal, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `email=${email}&password=${password}`
  })
    .then(response => response.json().then(user => ({ user, response })))
    .catch(error => {
      throw error;
    });
}

function facebook() {
  return fetch(loginUrlFacebook, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*"
    }
  }).catch(error => {
    throw error;
  });
}

function* loginFacebook() {
  let token;
  try {
    token = yield call(facebook);
    if (token.status == 200) {
      yield put({ type: LOGIN_SUCCESS });
      console.log("success");
    }
  } catch (error) {
    yield put({ type: LOGIN_ERROR, error });
  }
  return token;
}

function* logout() {
  localStorage.removeItem("token");
  yield put(push("/"));
  location.reload();
}

function* loginFlow(email, password) {
  let token;
  try {
    token = yield call(loginApi, email, password);
    if (token.response.status == 200) {
      yield put({ type: LOGIN_SUCCESS });
      localStorage.setItem("token", token.user.user_id);
      location.reload();
    }
  } catch (error) {
    yield put({ type: LOGIN_ERROR, error });
  }
  return token;
}

// Our watcher (saga).  It will watch for many things.
function* loginWatcher() {
  const { email, password } = yield take(LOGIN_REQUESTING);
  const task = yield fork(loginFlow, email, password);
}

function* logoutWatcher() {
  yield take(LOGOUT);
  yield fork(logout);
}

function* loginFacebookWatcher() {
  yield take(LOGIN_FACEBOOK);
  yield fork(loginFacebook);
}

export default [loginWatcher, logoutWatcher, loginFacebookWatcher];
