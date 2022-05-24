/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import rootSaga from './sagas';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    applyMiddleware(sagaMiddleware),
  );

  // Extensions
  store.runSaga = sagaMiddleware.run(rootSaga);
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
