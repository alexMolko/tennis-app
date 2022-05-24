/* eslint-disable linebreak-style */
import { fromJS, List } from 'immutable';
import { FETCH_PLAYERS, RECEIVED_PLAYERS } from '../constants/playerConstants';

const initialState = {
  dataTable: List([])
};

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case `${FETCH_PLAYERS}`:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.items);
        mutableState.set('dataTable', items);
      });
    case `${RECEIVED_PLAYERS}`:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.json);
        mutableState.set('dataTable', items);
      });
    default:
      return state;
  }
}
