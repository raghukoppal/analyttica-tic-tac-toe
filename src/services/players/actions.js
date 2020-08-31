import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  MAKE_OTHER_PLAYER_AS_ACTIVE,
} from './actionTypes';

// action creators
export const addPlayer = (id, name) => {
  return {
    type: ADD_PLAYER,
    payload: { id, name },
  };
};

export const removePlayer = (id, name) => ({
  type: REMOVE_PLAYER,
  payload: { id, name },
});

export const makeOtherPlayerActive = (id) => ({
  type: MAKE_OTHER_PLAYER_AS_ACTIVE,
  payload: { id },
});
