/* eslint-disable linebreak-style */
import * as types from '../constants/playerConstants';

export const fetchAction = () => ({
  type: `${types.FETCH_PLAYERS}`
});

export const fetchAction2 = (items) => ({
  type: `${types.FETCH_PLAYERS}`,
  items
});
