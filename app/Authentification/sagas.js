import { take, fork, cancel, call, put, cancelled } from "redux-saga/effects";

import { push } from "react-router-redux";

// Our login constants
import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT
} from "./constants";

const loginUrlLocal = `http://localhost:3000/login`;

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

function* logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("workshop");
  yield put(push("/"));
  location.reload();
}

function* loginFlow(email, password) {
  let token;
  try {
    token = yield call(loginApi, email, password);
    if (token.response.status == 200) {
      yield put({ type: LOGIN_SUCCESS });
      localStorage.setItem("user", token.user.user_id);
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

export default [loginWatcher, logoutWatcher];
