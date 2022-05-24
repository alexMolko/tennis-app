/* eslint-disable linebreak-style */
import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
  try {
    const jsonResponse = yield fetch(' https://ety4l6w7hl.execute-api.us-east-2.amazonaws.com/dev/mexata/players/all').then(response => response.json());
    yield put({ type: 'RECEIVED_PLAYERS', json: jsonResponse.Items, });
  } catch ({ response }) {
    yield all([
      { error: response }
    ]);
  }
}
function* actionWatcher() {
  yield takeLatest('FETCH_PLAYERS', fetchNews);
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
