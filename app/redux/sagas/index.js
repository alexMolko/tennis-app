/* eslint-disable linebreak-style */
import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
  try {
    const jsonResponse = yield fetch(' https://ety4l6w7hl.execute-api.us-east-2.amazonaws.com/dev/mexata/players/all').then(response => response.json());
    yield put({ type: 'RECEIVED_PLAYERS', json: jsonResponse, });
  } catch ({ response }) {
    yield all([
      { error: response }
    ]);
  }
}

function* fetchTop8() {
  try {
    const jsonResponse = yield fetch(' https://ety4l6w7hl.execute-api.us-east-2.amazonaws.com/dev/mexata/players/top8').then(response => response.json());
    yield put({ type: 'RECEIVED_PLAYERS', json: jsonResponse, });
  } catch ({ response }) {
    yield all([
      { error: response }
    ]);
  }
}

function* actionWatcher() {
  yield takeLatest('FETCH_PLAYERS', fetchNews);
}

function* actionWatcherTop8() {
  yield takeLatest('FETCH_TOP8', fetchTop8);
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
    actionWatcherTop8(),
  ]);
}
