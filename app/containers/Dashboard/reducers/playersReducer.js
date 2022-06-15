/* eslint-disable linebreak-style */
import { fromJS, List, Map } from 'immutable';
import {
  FETCH_PLAYERS, RECEIVED_PLAYERS, FETCH_TOP8, FETCH_PLAYER, RECEIVED_SINGLE_PLAYER
} from '../constants/playerConstants';

const initialState = {
  dataTable: List([]),
  dataPlayer: Map({})
};

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case `${FETCH_PLAYERS}`:
      return state.withMutations((mutableState) => {
        mutableState.set('dataTable', List([]));
      });
    case `${FETCH_PLAYER}`:
      return state.withMutations((mutableState) => {
        mutableState.set('dataPlayer', Map([]));
      });
    case `${RECEIVED_PLAYERS}`:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.json);
        mutableState.set('dataTable', items);
      });
    case `${RECEIVED_SINGLE_PLAYER}`:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.json);
        mutableState.set('dataPlayer', items);
      });
    case `${FETCH_TOP8}`:
      return state.withMutations((mutableState) => {
        mutableState.set('dataTable', List([]));
      });
    default:
      return state;
  }
}
