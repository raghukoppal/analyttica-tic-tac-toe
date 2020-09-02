import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  MAKE_OPPONENT_PLAYER_ACTIVE,
  RESET_PLAYERS_ICON,
  ADD_PLAYERS_ICON,
  UPDATE_PLAYED_SQUARE,
  RESET_SQUARES,
  EMPTY_SQUARES,
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

export const makeOpponentPlayerActive = (id) => ({
  type: MAKE_OPPONENT_PLAYER_ACTIVE,
  payload: { id },
});

export const resetPlayersIcon = () => ({
  type: RESET_PLAYERS_ICON,
});

export const addPlayersIcon = () => ({
  type: ADD_PLAYERS_ICON,
});

export const updatePlaySquare = (idx, icon) => ({
  type: UPDATE_PLAYED_SQUARE,
  payload: { idx, icon },
});

export const resetPlaySquare = (idx, icon) => ({
  type: RESET_SQUARES,
  payload: { idx, icon },
});

export const emptyPlaySquare = () => ({
  type: EMPTY_SQUARES,
});
