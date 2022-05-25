/* eslint-disable linebreak-style */
import * as types from '../constants/playerConstants';

export const fetchAction = () => ({
  type: `${types.FETCH_PLAYERS}`
});

export const fetchActionTop8 = () => ({
  type: `${types.FETCH_TOP8}`
});
