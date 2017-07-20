import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects'

import { push } from 'react-router-redux';

// Our login constants
import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT
} from './constants'

const loginUrl = `http://localhost:3000/login`

function loginApi (email, password) {
  return fetch(loginUrl, {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `email=${email}&password=${password}`
  })
    .catch((error) => { throw error })
}

function* logout () {
  localStorage.removeItem('token')
  yield put(push('/'))
  location.reload()
}

function* loginFlow (email, password) {
  let token
  try {
    token = yield call(loginApi, email, password)
    if(token.status == 200){
    yield put({ type: LOGIN_SUCCESS, successful: true})
    localStorage.setItem('token', email)
    location.reload()
  }
  } catch (error) {
    yield put({ type: LOGIN_ERROR, error})
  }
  return token
}

// Our watcher (saga).  It will watch for many things.
function* loginWatcher () {
  while (true) {
    const { email, password } = yield take(LOGIN_REQUESTING)
    const task = yield fork(loginFlow, email, password)
  }
}

function* logoutWatcher () {
  yield take(LOGOUT)
  yield fork(logout)
}

export default [
  loginWatcher,
  logoutWatcher
];
