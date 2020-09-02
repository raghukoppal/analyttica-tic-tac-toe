import { connect } from 'react-redux';
import { GameBoard } from './index';
import {
  resetPlayersIcon,
  addPlayersIcon,
  makeOpponentPlayerActive,
  resetPlaySquare,
  emptyPlaySquare,
} from '../../services/players/actions';

const mapStateToProps = (state, props) => ({
  players: state.players.players,
  playSquares: state.playSquares.playSquares,
});

const mapDispatchToProps = (dispatch) => ({
  resetPlayersIcon: () => dispatch(resetPlayersIcon()),
  addPlayersIcon: () => dispatch(addPlayersIcon()),
  makeOpponentPlayerActive: (id) => dispatch(makeOpponentPlayerActive(id)),
  resetPlaySquare: () => dispatch(resetPlaySquare()),
  emptyPlaySquare: () => dispatch(emptyPlaySquare()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
