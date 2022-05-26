/* eslint-disable linebreak-style */
import { fromJS, List } from 'immutable';
import { FETCH_PLAYERS, RECEIVED_PLAYERS, FETCH_TOP8 } from '../constants/playerConstants';

const initialState = {
  dataTable: List([])
};

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case `${FETCH_PLAYERS}`:
      return state.withMutations((mutableState) => {
        mutableState.set('dataTable', List([]));
      });
    case `${RECEIVED_PLAYERS}`:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.json);
        mutableState.set('dataTable', items);
      });
    case `${FETCH_TOP8}`:
      return state.withMutations((mutableState) => {
        mutableState.set('dataTable', List([]));
      });
    default:
      return state;
  }
}
