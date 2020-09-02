import {
  ADD_PLAYER,
  MAKE_OPPONENT_PLAYER_ACTIVE,
  RESET_PLAYERS_ICON,
  ADD_PLAYERS_ICON,
  UPDATE_PLAYED_SQUARE,
  RESET_SQUARES,
  EMPTY_SQUARES,
} from './actionTypes';

const initialPlayers = {
  players: [
    { id: 'player1', name: '', playerIcon: 'X', winCount: 0, active: true },
    { id: 'player2', name: '', playerIcon: 'O', winCount: 0, active: false },
  ],
};

// reducer
export const players = (state = initialPlayers, action = {}) => {
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
    case MAKE_OPPONENT_PLAYER_ACTIVE:
      return {
        ...state,
        players: state.players.map((player) =>
          player.id !== action.payload.id
            ? { ...player, active: true }
            : { ...player, active: false }
        ),
      };
    case RESET_PLAYERS_ICON:
      return {
        ...state,
        players: state.players.map((player) => ({ ...player, playerIcon: '' })),
      };
    case ADD_PLAYERS_ICON:
      return {
        ...state,
        players: state.player.map((player, index) => ({
          ...player,
          playerIcon: index % 2 > 0 ? 'O' : 'X',
        })),
      };
    default:
      return state;
  }
};

const initialplaySquares = {
  playSquares: Array(9).fill(null),
};

export const playSquares = (state = initialplaySquares, action = {}) => {
  switch (action.type) {
    case UPDATE_PLAYED_SQUARE:
      return {
        ...state,
        playSquares: state.playSquares.map((square, i) => {
          if (i === action.payload.idx) {
            return action.payload.icon;
          }
          return square;
        }),
      };
    case RESET_SQUARES:
      return {
        ...state,
        playSquares: Array(9).fill(null),
      };
    case EMPTY_SQUARES:
      return {
        ...state,
        playSquares: [],
      };
    default:
      return state;
  }
};
