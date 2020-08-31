import { ADD_PLAYER, MAKE_OTHER_PLAYER_AS_ACTIVE } from './actionTypes';

// reducer
export const players = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        players: state.players.map((player) =>
          player.id === action.payload.id
            ? { ...player, name: action.payload.name }
            : player
        ),
      };
    case MAKE_OTHER_PLAYER_AS_ACTIVE:
      return {
        ...state,
        players: state.players.map((player) =>
          player.id !== action.payload.id
            ? { ...player, active: true }
            : { ...player, active: false }
        ),
      };
    default:
      return state;
  }
};
