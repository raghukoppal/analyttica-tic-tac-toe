import { connect } from 'react-redux';
import { PlayBoard } from './index';
import {
  resetPlaySquare,
  emptyPlaySquare,
} from '../../services/players/actions';

const mapStateToProps = (state) => ({
  players: state.players.players,
  playSquares: state.playSquares.playSquares,
});

const mapDispatchToProps = (dispatch) => ({
  resetPlaySquare: () => dispatch(resetPlaySquare()),
  emptyPlaySquare: () => dispatch(emptyPlaySquare()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayBoard);
