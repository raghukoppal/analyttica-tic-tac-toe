import { connect } from 'react-redux';
import { IconButton } from './index';
import {
  resetPlayersIcon,
  addPlayersIcon,
  makeOpponentPlayerActive,
  updatePlaySquare,
} from '../../services/players/actions';

const mapStateToProps = (state, props) => ({
  players: state.players.players,
  playSquares: state.playSquares.playSquares,
});

const mapDispatchToProps = (dispatch) => ({
  makeOpponentPlayerActive: (id) => dispatch(makeOpponentPlayerActive(id)),
  updatePlaySquare: (idx, icon) => dispatch(updatePlaySquare(idx, icon)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IconButton);
